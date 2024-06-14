import { StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import { VStack, Text, Image, HStack, Box } from "native-base";
import COLORS from "../constants/colors";
import { Ionicons } from "react-native-vector-icons";

import { Audio } from "expo-av";

const YeuCauScreen = ({ navigation }) => {
  //add audio
  const [sound, setSound] = useState();

  {
    /*Tôi muốn gọi điện */
  }

  async function playSound_goidien() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/goidien.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }
  {
    /*Tôi muốn đi dạo*/
  }
  async function playSound_didao() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/didao.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  {
    /*Tôi muốn hỏi giờ*/
  }
  async function playSound_hoigio() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/hoigio.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  {
    /*Tôi muốn uống thuốc*/
  }
  async function playSound_uongthuoc() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/uongthuoc.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <VStack space={10} backgroundColor={"gray.100"}>
      <HStack padding={5} background={"#22d3ee"}>
        <StatusBar translucent={false} backgroundColor={"#22d3ee"}></StatusBar>
        <HStack marginLeft={5} justifyContent={"center"}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle-outline"
              color={COLORS.white}
              size={40}
            ></Ionicons>
          </TouchableOpacity>
        </HStack>
        <HStack marginLeft={5}>
          <Text color={"white"} fontSize="2xl" fontWeight={"medium"}>
            {" "}
            CHỦ ĐỀ YÊU CẦU
          </Text>
        </HStack>
      </HStack>

      <HStack space={10} justifyContent="center">
        <VStack>
          <TouchableOpacity onPress={playSound_goidien}>
            <Image
              size={150}
              borderRadius={100}
              source={require("../assets/images/YeuCau/goidien.png")}
              alt="Alternate Text"
            />
          </TouchableOpacity>

          <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
            {" "}
            Tôi muốn gọi điện
          </Text>
        </VStack>
        <VStack>
          <TouchableOpacity onPress={playSound_didao}>
            <Image
              size={150}
              borderRadius={100}
              source={require("../assets/images/YeuCau/didao.png")}
              alt="Alternate Text"
            />
          </TouchableOpacity>
          <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
            {" "}
            Tôi muốn đi dạo
          </Text>
        </VStack>
      </HStack>

      <HStack space={10} justifyContent="center">
        <VStack>
          <TouchableOpacity onPress={playSound_hoigio}>
            <Image
              size={150}
              borderRadius={100}
              source={require("../assets/images/YeuCau/hoigio.png")}
              alt="Alternate Text"
            />
          </TouchableOpacity>
          <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
            {" "}
            Tôi muốn hỏi giờ
          </Text>
        </VStack>
        <VStack>
          <TouchableOpacity onPress={playSound_uongthuoc}>
            <Image
              size={150}
              borderRadius={100}
              source={require("../assets/images/YeuCau/uongthuoc.png")}
              alt="Alternate Text"
            />
          </TouchableOpacity>
          <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
            {" "}
            Tôi muốn uống thuốc
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default YeuCauScreen;

const styles = StyleSheet.create({});
