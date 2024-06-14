import { StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import { VStack, Text, Image, HStack, Box, ScrollView } from "native-base";
import COLORS from "../constants/colors";
import { Ionicons } from "react-native-vector-icons";

import { Audio } from "expo-av";

const SinhHoatScreen = ({navigation}) => {
  //add audio
  const [sound, setSound] = useState();

  {
    /*Đi tắm */
  }

  async function playSound_tam() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/tam.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }
  {
    /*Vệ sinh*/
  }
  async function playSound_vesinh() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/vesinh.mp3")
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
            CHỦ ĐỀ SINH HOẠT
          </Text>
        </HStack>
      </HStack>
      <ScrollView>
        <HStack space={5} justifyContent="center">
          <VStack >
            <TouchableOpacity onPress={playSound_tam}>
              <Image
                size={150}
                borderRadius={100}
                source={require("../assets/images/SinhHoat/tam.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>

            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              Tôi muốn đi tắm
            </Text>
          </VStack>
          <VStack >
            <TouchableOpacity onPress={playSound_vesinh}>
              <Image
                size={150}
                borderRadius={100}
                source={require("../assets/images/SinhHoat/vesinh.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>
            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
            Tôi muốn đi vệ sinh
            </Text>
          </VStack>
        </HStack>

       
      </ScrollView>
    </VStack>
  );
};

export default SinhHoatScreen;

const styles = StyleSheet.create({});
