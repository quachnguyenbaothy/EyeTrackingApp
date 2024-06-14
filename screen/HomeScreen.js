import { StyleSheet, View, StatusBar, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  VStack,
  Text,
  Image,
  ScrollView,
  HStack,
  Pressable,
  Box,
} from "native-base";
import {
  Ionicons,
  Entypo,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <VStack space={2} backgroundColor={"gray.100"}>
      <StatusBar translucent={false} backgroundColor={"#22d3ee"}></StatusBar>
      <Image
        source={require("../assets/images/anhnen.jpg")}
        alt={"Home Image"}
        width={"full"}
        height={"230"}
      />
      <VStack p={4} space={2}>
        <Text fontSize="2xl" fontWeight={"bold"} color={"gray.900"}>
          EyeTracking
        </Text>
        {/* <Text fontSize="2xl" fontWeight={"bold"} color={"gray.900"}>
        Điều khiển cử chỉ mắt, phát ra giọng nói
        </Text> */}
        <Text fontSize="lg" textAlign={"justify"}>
          Điều khiển cử chỉ mắt, phát ra giọng nói. Ứng dụng hỗ trợ ngôn ngữ
          dành cho người bị tai biến, bị liệt và hạn chế khả năng nói.
        </Text>
        <Text
          fontSize="2xl"
          justifyItems="center"
          marginLeft={4}
          fontWeight={"medium"}
          color={"#16a34a"}
        >
          CHỦ ĐỀ HỖ TRỢ NGÔN NGỮ
        </Text>
        <ScrollView>
          <VStack margin={7} alignItems={"center"} space={7}>
            <HStack space={7} justifyContent="center">
              {/* Chủ đề ăn uống*/}
              <MenuItem
                icon={
                  <MaterialCommunityIcons
                    name="food-fork-drink"
                    size={50}
                    color={"#059669"}
                  />
                }
                onPress={() => navigation.navigate("AnUongScreen")}
                title={"Ăn uống"}
              />

              {/* Chủ đề giao tiếp*/}
              <MenuItem
                icon={<Entypo name="chat" size={50} color={"#06b6d4"} />}
                onPress={() => navigation.navigate("GiaoTiepScreen")}
                title={"Giao tiếp"}
              />
            </HStack>

            <HStack space={7} justifyContent="center">
              {/* Chủ đề sinh hoạt*/}
              <MenuItem
                icon={<FontAwesome name="bath" size={50} color={"#0284c7"} />}
                onPress={() => navigation.navigate("SinhHoatScreen")}
                title={"Sinh hoạt"}
              />
              {/* chủ đề Yêu cầu*/}
              <MenuItem
                icon={
                  <MaterialCommunityIcons
                    name="account-question"
                    size={50}
                    color={"#0369a1"}
                  />
                }
                onPress={() => navigation.navigate("YeuCauScreen")}
                title={"Yêu cầu"}
              />
            </HStack>
            <HStack space={7} justifyContent="center">
              {/* chủ đề sức khỏe*/}
              <MenuItem
                icon={
                  <MaterialIcons
                    name="health-and-safety"
                    size={50}
                    color={"#0891b2"}
                  />
                }
                onPress={() => navigation.navigate("SucKhoeScreen")}
                title={"Sức khỏe"}
              />
              {/* chủ đề giải trí*/}
              <MenuItem
                icon={
                  <MaterialIcons
                    name="music-video"
                    size={50}
                    color={"#f43f5e"}
                  />
                }
                onPress={() => navigation.navigate("GiaiTriScreen")}
                title={"Giải trí"}
              />
            </HStack>
          </VStack>

          <HStack></HStack>
        </ScrollView>
      </VStack>
    </VStack>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

const MenuItem = ({ title, description, icon, onPress }) => (
  <Pressable
    backgroundColor={"white"}
    height={20}
    width={40}
    _pressed={{
      backgroundColor: "gray.200",
    }}
    rounded={20}
    onPress={onPress}
  >
    <HStack p={2} space={3} alignItems={"center"}>
      {icon}

      <HStack>
        <Text color={"#f97316"} fontSize="lg" fontWeight={"medium"}>
          {title}
        </Text>
        <Text fontSize="md">{description}</Text>
      </HStack>
    </HStack>
  </Pressable>
);
