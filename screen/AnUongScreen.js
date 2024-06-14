import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { VStack, Text, Image, HStack, Box, StatusBar } from "native-base";
import COLORS from "../constants/colors";
import { Ionicons } from "react-native-vector-icons";

import { Audio } from "expo-av";

const AnUongScreen = ({ navigation }) => {
  //add audio
  const [sound, setSound] = useState();

  {
    /*Tôi đói bụng */
  }

  async function playSound_doi() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/doi.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }
  {
    /*Tôi khát nước*/
  }
  async function playSound_khat() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/khat.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  {
    /*Tôi đã no*/
  }
  async function playSound_no() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/no.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  {
    /*Tôi ăn ngon*/
  }
  async function playSound_ngon() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/ngon.mp3")
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
      <HStack padding={5} background={"#22d3ee"} >
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
        <HStack marginLeft={5} >
          <Text color={"white"} fontSize="2xl" fontWeight={"medium"}>
            {" "}
            CHỦ ĐỀ ĂN UỐNG
          </Text>
        </HStack>
      </HStack>

      <HStack space={10} justifyContent="center">
        <VStack>
          <TouchableOpacity onPress={playSound_doi}>
            <Image
              size={150}
              borderRadius={100}
              source={require("../assets/images/AnUong/doi.jpg")}
              alt="Alternate Text"
            />
          </TouchableOpacity>

          <Text color={"#0e7490"} fontSize="2xl" fontWeight={"medium"}>
            {" "}
            Tôi đói bụng
          </Text>
        </VStack>
        <VStack>
          <TouchableOpacity onPress={playSound_khat}>
            <Image
              size={150}
              borderRadius={100}
              source={require("../assets/images/AnUong/khat.png")}
              alt="Alternate Text"
            />
          </TouchableOpacity>
          <Text color={"#0e7490"} fontSize="2xl" fontWeight={"medium"}>
            {" "}
            Tôi khát nước
          </Text>
        </VStack>
      </HStack>

      <HStack space={10} justifyContent="center">
        <VStack>
          <TouchableOpacity onPress={playSound_no}>
            <Image
              size={150}
              borderRadius={100}
              source={require("../assets/images/AnUong/no.png")}
              alt="Alternate Text"
            />
          </TouchableOpacity>
          <Text color={"#0e7490"} fontSize="2xl" fontWeight={"medium"}>
            {" "}
            Tôi đã no
          </Text>
        </VStack>
        <VStack>
          <TouchableOpacity onPress={playSound_ngon}>
            <Image
              size={150}
              borderRadius={100}
              source={require("../assets/images/AnUong/ngon.png")}
              alt="Alternate Text"
            />
          </TouchableOpacity>
          <Text color={"#0e7490"} fontSize="2xl" fontWeight={"medium"}>
            {" "}
            Tôi ăn ngon
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default AnUongScreen;

const styles = StyleSheet.create({});
