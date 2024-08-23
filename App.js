import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import styles from "./styles/myStyle";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="lock" size={20} color="#000" style={{ paddingEnd: 10 }} />
          <Text style={{ fontSize: 25, fontWeight: 700, paddingEnd: 10 }}>
            rut.wisarxt
          </Text>
          <Icon
            name="chevron-down"
            size={15}
            color="#000"
            style={{ paddingEnd: 10 }}
          />
        </View>
        <View style={styles.headerRight}>
          <Icon name="threads" size={30} style={{ paddingHorizontal: 15 }} />
          <Icon
            name="square-plus"
            size={30}
            style={{ paddingHorizontal: 15 }}
          />
          <Icon name="bars" size={30} style={{ paddingStart: 15 }} />
        </View>
      </View>
      <View style={styles.profileAndFollower}>
        <View style={styles.profileImage}>
          <Image
            source={{
              uri: "https://instagram.fbkk12-3.fna.fbcdn.net/v/t51.2885-19/425433048_3320463224926046_4452275309846206808_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbkk12-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=OWz0hX66VQYQ7kNvgHOBEiD&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYAduppXqmoqdKFsas1v_DSqaZLHRn9S7FJLRJCqpOni4A&oe=66CE76FE&_nc_sid=8f1549",
            }}
            style={{ width: 85, height: 85, borderRadius: 50 }}
          />
          <Icon name="circle-plus" size={25} color="#fff" style={styles.addIcon} />
        </View>
        <View style={styles.followerBar}>
          <View style={styles.followerTextGroup}>
            <Text style={styles.followerCount}>7</Text>
            <Text style={styles.followerText}>โพสต์</Text>
          </View>
          <View style={styles.followerTextGroup}>
            <Text style={styles.followerCount}>458</Text>
            <Text style={styles.followerText}>ผู้ติดตาม</Text>
          </View>
          <View style={styles.followerTextGroup}>
            <Text style={styles.followerCount}>512</Text>
            <Text style={styles.followerText}>กำลังติดตาม</Text>
          </View>
        </View>
      </View>
      <View style={styles.bioBar}>
        <Text style={styles.fullName}>Wisaut Yuensuk</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
