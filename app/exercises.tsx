import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodyPart } from "../api/exerciseDB";
import { bodyParts, demoExercises } from "../constants";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Ionicons";
import ExerciseList from "../components/ExerciseList";
import { ScrollView } from "react-native-virtualized-view";

export default function Exercises() {
  const router = useRouter();
  const { bodyPart, index } = useLocalSearchParams();

  const [exercises, setExercises] = useState([]);

  const imageIndex = parseInt(index.toLocaleString());

  useEffect(() => {
    if (bodyPart) getExercises(bodyPart);
  }, [bodyPart]);

  const getExercises = async (bodyPart: string | string[]) => {
    const data = await fetchExercisesByBodyPart(bodyPart);
    setExercises(data);
  };
  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={bodyParts[imageIndex].image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
        className="bg-rose-500 mx-4 absolute rounded-full justify-center items-center pr-1"
      >
        <Icon name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-700"
        >
          {bodyPart} exercises
        </Text>

        <View className="mb-10">
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
}
