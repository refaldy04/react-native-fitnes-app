import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/AntDesign";

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
        <Text
          style={{ fontSize: hp(3.5) }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          {item.name}
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Equipment
          <Text className="font-bold text-neutral-800"> {item.equipment}</Text>
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Secondary Muscles
          <Text className="font-bold text-neutral-800">
            {" "}
            {item.secondaryMuscles}
          </Text>
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Target
          <Text className="font-bold text-neutral-800"> {item.target}</Text>
        </Text>

        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          Intructions
        </Text>

        {instructions
          ? instructions.split(",").map((instruction: string, i: number) => (
              <Text
                key={i}
                style={{ fontSize: hp(1.7) }}
                className="text-neutral-800"
              >
                {instruction.trim()}
              </Text>
            ))
          : null}
      </ScrollView>
    </View>
  );
}
