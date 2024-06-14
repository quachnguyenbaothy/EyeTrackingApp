import { StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import { VStack, Text, Image, HStack, Box, ScrollView } from "native-base";
import COLORS from "../constants/colors";
import { Ionicons } from "react-native-vector-icons";

import { Audio } from "expo-av";

const GiaoTiepScreen = ({ navigation }) => {
  //add audio
  const [sound, setSound] = useState();

  {
    /*Xin chào*/
  }

  async function playSound_xinchao() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/xinchao.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }
  {
    /*Tạm biệt*/
  }
  async function playSound_tambiet() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/tambiet.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  {
    /*Cảm ơn*/
  }
  async function playSound_camon() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/camon.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  {
    /*Xin lỗi*/
  }
  async function playSound_xinloi() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/xinloi.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  {
    /*Đồng ý*/
  }
  async function playSound_dung() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/dongy.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  {
    /*Không đồng ý*/
  }
  async function playSound_sai() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/khongdongy.mp3")
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
            CHỦ ĐỀ GIAO TIẾP
          </Text>
        </HStack>
      </HStack>
      <ScrollView>
        <HStack space={10} justifyContent="center">
          <VStack>
            <TouchableOpacity onPress={playSound_xinchao}>
              <Image
                size={150}
                borderRadius={100}
                source={require("../assets/images/GiaoTiep/xinchao.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>

            <Text color={"#0e7490"} fontSize="2xl" fontWeight={"medium"}>
              {" "}
              Xin chào
            </Text>
          </VStack>
          <VStack>
            <TouchableOpacity onPress={playSound_tambiet}>
              <Image
                size={150}
                borderRadius={100}
                source={require("../assets/images/GiaoTiep/tambiet.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>
            <Text color={"#0e7490"} fontSize="2xl" fontWeight={"medium"}>
              {" "}
              Tạm biệt
            </Text>
          </VStack>
        </HStack>

        <HStack space={10} justifyContent="center">
          <VStack>
            <TouchableOpacity onPress={playSound_camon}>
              <Image
                size={150}
                borderRadius={100}
                source={require("../assets/images/GiaoTiep/camon.jpg")}
                alt="Alternate Text"
              />
            </TouchableOpacity>
            <Text color={"#0e7490"} fontSize="2xl" fontWeight={"medium"}>
              {" "}
              Cảm ơn
            </Text>
          </VStack>
          <VStack>
            <TouchableOpacity onPress={playSound_xinloi}>
              <Image
                size={150}
                borderRadius={100}
                source={require("../assets/images/GiaoTiep/xinloi.jpg")}
                alt="Alternate Text"
              />
            </TouchableOpacity>
            <Text color={"#0e7490"} fontSize="2xl" fontWeight={"medium"}>
              {" "}
              Xin lỗi
            </Text>
          </VStack>
        </HStack>
        <HStack space={10} justifyContent="center">
          <VStack>
            <TouchableOpacity onPress={playSound_dung}>
              <Image
                size={150}
                borderRadius={100}
                source={require("../assets/images/GiaoTiep/dongy.jpg")}
                alt="Alternate Text"
              />
            </TouchableOpacity>
            <Text color={"#0e7490"} fontSize="2xl" fontWeight={"medium"}>
              {" "}
              Đồng ý
            </Text>
          </VStack>
          <VStack>
            <TouchableOpacity onPress={playSound_sai}>
              <Image
                size={150}
                borderRadius={100}
                source={require("../assets/images/GiaoTiep/khongdongy.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>
            <Text color={"#0e7490"} fontSize="2xl" fontWeight={"medium"}>
              {" "}
              Không đồng ý
            </Text>
          </VStack>
        </HStack>
      </ScrollView>
    </VStack>
  );
};

export default GiaoTiepScreen;

const styles = StyleSheet.create({});
