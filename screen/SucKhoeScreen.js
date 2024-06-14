import { StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import { VStack, Text, Image, HStack, Box, ScrollView } from "native-base";
import COLORS from "../constants/colors";
import { Ionicons } from "react-native-vector-icons";

import { Audio } from "expo-av";

const SucKhoeScreen = ({ navigation }) => {
  //add audio
  const [sound, setSound] = useState();

  {
    /*Tôi buồn*/
  }

  async function playSound_buon() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/buon.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }
  {
    /*Tôi vui*/
  }
  async function playSound_vui() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/vui.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  {
    /*Buồn ngủ*/
  }
  async function playSound_buonngu() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/buonngu.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  {
    /*Đau cơ*/
  }
  async function playSound_dauco() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/dauco.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  {
    /*Đau chân*/
  }
  async function playSound_dauchan() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/dauchan.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  {
    /*Đau lưng*/
  }
  async function playSound_daulung() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/daulung.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  {
    /*Đau răng*/
  }
  async function playSound_daurang() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/daurang.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }
  {
    /*Đau bụng*/
  }
  async function playSound_daubung() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/daubung.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }
  {
    /*Đau đầu*/
  }
  async function playSound_daudau() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/daudau.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }
  {
    /*Tôi sốt*/
  }
  async function playSound_sot() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/sot.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }
  {
    /*Tôi lạnh*/
  }
  async function playSound_lanh() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/lanh.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }
  {
    /*Tôi mệt*/
  }
  async function playSound_met() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/met.mp3")
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
    <ScrollView>
      <VStack space={10} backgroundColor={"gray.100"}>
        <HStack padding={5} background={"#22d3ee"}>
          <StatusBar
            translucent={false}
            backgroundColor={"#22d3ee"}
          ></StatusBar>
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
              CHỦ ĐỀ SỨC KHỎE
            </Text>
          </HStack>
        </HStack>
        <HStack space={5} justifyContent="center">
          <VStack>
            <TouchableOpacity onPress={playSound_buon}>
              <Image
                size={100}
                borderRadius={100}
                source={require("../assets/images/TamLi/buon.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>

            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              Tôi buồn
            </Text>
          </VStack>
          <VStack>
            <TouchableOpacity onPress={playSound_vui}>
              <Image
                size={100}
                borderRadius={100}
                source={require("../assets/images/TamLi/vui.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>
            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              Tôi vui
            </Text>
          </VStack>
          <VStack>
            <TouchableOpacity onPress={playSound_buonngu}>
              <Image
                size={100}
                borderRadius={100}
                source={require("../assets/images/TamLi/buonngu.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>
            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              Buồn ngủ
            </Text>
          </VStack>
        </HStack>

        <HStack space={5} justifyContent="center">
          <VStack>
            <TouchableOpacity onPress={playSound_dauco}>
              <Image
                size={100}
                borderRadius={100}
                source={require("../assets/images/TamLi/moico.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>

            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              Đau cơ
            </Text>
          </VStack>
          <VStack>
            <TouchableOpacity onPress={playSound_dauchan}>
              <Image
                size={100}
                borderRadius={100}
                source={require("../assets/images/TamLi/dauchan.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>
            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              Đau chân
            </Text>
          </VStack>
          <VStack>
            <TouchableOpacity onPress={playSound_daulung}>
              <Image
                size={100}
                borderRadius={100}
                source={require("../assets/images/TamLi/daulung.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>
            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              Đau lưng
            </Text>
          </VStack>
        </HStack>

        <HStack space={5} justifyContent="center">
          <VStack>
            <TouchableOpacity onPress={playSound_daurang}>
              <Image
                size={100}
                borderRadius={100}
                source={require("../assets/images/TamLi/daurang.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>

            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              Đau răng
            </Text>
          </VStack>
          <VStack>
            <TouchableOpacity onPress={playSound_daubung}>
              <Image
                size={100}
                borderRadius={100}
                source={require("../assets/images/TamLi/daubung.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>
            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              Đau bụng
            </Text>
          </VStack>
          <VStack>
            <TouchableOpacity onPress={playSound_daudau}>
              <Image
                size={100}
                borderRadius={100}
                source={require("../assets/images/TamLi/daudau.jpg")}
                alt="Alternate Text"
              />
            </TouchableOpacity>
            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              Đau đầu
            </Text>
          </VStack>
        </HStack>

        <HStack space={5} justifyContent="center">
          <VStack>
            <TouchableOpacity onPress={playSound_sot}>
              <Image
                size={100}
                borderRadius={100}
                source={require("../assets/images/TamLi/sot.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>

            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              Tôi sốt
            </Text>
          </VStack>
          <VStack>
            <TouchableOpacity onPress={playSound_lanh}>
              <Image
                size={100}
                borderRadius={100}
                source={require("../assets/images/TamLi/lanh.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>
            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              Tôi lạnh
            </Text>
          </VStack>
          <VStack>
            <TouchableOpacity onPress={playSound_met}>
              <Image
                size={100}
                borderRadius={100}
                source={require("../assets/images/TamLi/met.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>
            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              Tôi mệt
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default SucKhoeScreen;

const styles = StyleSheet.create({});
