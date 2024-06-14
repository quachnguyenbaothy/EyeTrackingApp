import { StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import { VStack, Text, Image, HStack, Box, ScrollView } from "native-base";
import COLORS from "../constants/colors";
import { Ionicons } from "react-native-vector-icons";

import { Audio } from "expo-av";
import * as Linking from "expo-linking";

const GiaiTriScreen = ({ navigation }) => {
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
            CHỦ ĐỀ GIẢI TRÍ
          </Text>
        </HStack>
      </HStack>

      <ScrollView>
        <HStack space={10} justifyContent="center">
          <VStack>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://www.youtube.com/")}
            >
              <Image
                size={150}
                borderRadius={100}
                source={require("../assets/images/GiaiTri/yotube.jpg")}
                alt="Alternate Text"
              />
            </TouchableOpacity>

            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              Xem Yotube
            </Text>
          </VStack>
          <VStack>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://zingmp3.vn/album/Top-100-Nhac-Cach-Mang-Viet-Nam-Truong-Kha-Quang-Ha-Tinh-Ca-Viet-Ta-Minh-Tam/ZWZB96AO.html"
                )
              }
            >
              <Image
                size={150}
                borderRadius={100}
                source={require("../assets/images/GiaiTri/cachmang.jpg")}
                alt="Alternate Text"
              />
            </TouchableOpacity>
            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              Nhạc Cách Mạng
            </Text>
          </VStack>
        </HStack>

        <HStack space={10} justifyContent="center">
          <VStack>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.nhaccuatui.com/playlist/100-ca-khuc-nhac-vang-bolero-noi-bat-nhac-vang-chon-loc-va.Jbuwqg61vowH.html"
                )
              }
            >
              <Image
                size={150}
                borderRadius={100}
                source={require("../assets/images/GiaiTri/bolero.jpg")}
                alt="Alternate Text"
              />
            </TouchableOpacity>

            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              Nhạc Bolero
            </Text>
          </VStack>
          <VStack>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://phatphapungdung.com/phap-am/kinh-tung")
              }
            >
              <Image
                size={150}
                borderRadius={100}
                source={require("../assets/images/GiaiTri/kinhphat.jpg")}
                alt="Alternate Text"
              />
            </TouchableOpacity>
            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              Kinh Phật
            </Text>
          </VStack>
        </HStack>

        <HStack space={10} justifyContent="center">
          <VStack>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.facebook.com/?locale=vi_VN")
              }
            >
              <Image
                size={150}
                borderRadius={100}
                source={require("../assets/images/GiaiTri/facebook.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>

            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              FaceBook
            </Text>
          </VStack>
          <VStack>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.tiktok.com/foryou?lang=vi-VN")
              }
            >
              <Image
                size={150}
                borderRadius={100}
                source={require("../assets/images/GiaiTri/tiktok.png")}
                alt="Alternate Text"
              />
            </TouchableOpacity>
            <Text color={"#0e7490"} fontSize="lg" fontWeight={"medium"}>
              {" "}
              TickTok
            </Text>
          </VStack>
        </HStack>
      </ScrollView>
    </VStack>
  );
};

export default GiaiTriScreen;

const styles = StyleSheet.create({});
