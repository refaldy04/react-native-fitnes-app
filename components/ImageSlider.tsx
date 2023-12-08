import { View } from "react-native";
import React from "react";
import Carousel, {
  AdditionalParallaxProps,
  ParallaxImage,
} from "react-native-snap-carousel";
import { sliderImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ImageProps as DefaultImageProps, ImageURISource } from "react-native";

type ImageProps = DefaultImageProps & ImageURISource;

export default function ImageSlider() {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoplay={true}
      renderItem={itemCard}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
}

const itemCard: any = (
  { item, index }: { item: ImageProps; index: number },
  parallaxProps: AdditionalParallaxProps
) => (
  <View style={{ width: wp(100) - 70, height: hp(25) }}>
    <ParallaxImage
      source={item}
      containerStyle={{ borderRadius: 30, flex: 1 }}
      style={{ resizeMode: "contain" }}
      parallaxFactor={0.3}
      {...parallaxProps}
    />
  </View>
);
