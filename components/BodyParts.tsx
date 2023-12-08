import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import { ImageProps as DefaultImageProps, ImageURISource } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type ImageProps = DefaultImageProps & ImageURISource;

interface IBodyPart {
  name: string;
  image: ImageProps;
}

interface IBodyPartList {
  item: IBodyPart;
  index: number;
}

export default function BodyParts() {
  return (
    <View className="mx-4">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-700"
      >
        Exercises
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <BodyPartCard item={item} index={index} />
        )}
      />
    </View>
  );
}

const BodyPartCard: React.FC<IBodyPartList> = ({ item, index }) => {
  return (
    <View>
      <TouchableOpacity
        style={{ width: wp(44), height: wp(52) }}
        className="justify-end p-4 mb-4"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ width: wp(44), height: wp(52) }}
          className="rounded-[35px] absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.9)"]}
          style={{ width: wp(44), height: hp(15) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute rounded-b-[35px] bottom-0"
        />
        <Text
          style={{ fontSize: hp(2.3) }}
          className="text-white font-semibold text-center tracking-wide"
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
