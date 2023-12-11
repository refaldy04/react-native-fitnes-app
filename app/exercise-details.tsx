import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/AntDesign";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function ExerciseDetails() {
  const item = useLocalSearchParams();
  const router = useRouter();
  const imageUri = item.gifUrl?.toLocaleString();
  const instructions = item.instructions?.toLocaleString();

  return (
    <View className="flex-1">
      <View className="shadow-md bg-white rounded-b-[40px]">
        <Image
          source={{ uri: imageUri }}
          contentFit="cover"
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        />
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-2 absolute rounded-full justify-center items-center mt-2 right-4 top-4"
      >
        <Icon name="closecircle" size={hp(4.5)} color="#f43f5e" />
      </TouchableOpacity>

      <ScrollView
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Animated.Text
          entering={FadeInDown.duration(300).springify()}
          style={{ fontSize: hp(3.5) }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          {item.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Equipment
          <Text className="font-bold text-neutral-800"> {item.equipment}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(200).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Secondary Muscles
          <Text className="font-bold text-neutral-800">
            {" "}
            {item.secondaryMuscles}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(300).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Target
          <Text className="font-bold text-neutral-800"> {item.target}</Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.delay(400).duration(300).springify()}
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          Intructions
        </Animated.Text>

        {instructions
          ? instructions.split(",").map((instruction: string, i: number) => (
              <Animated.Text
                entering={FadeInDown.delay((i + 6) * 100)
                  .duration(300)
                  .springify()}
                key={i}
                style={{ fontSize: hp(1.7) }}
                className="text-neutral-800"
              >
                {instruction.trim()}
              </Animated.Text>
            ))
          : null}
      </ScrollView>
    </View>
  );
}
