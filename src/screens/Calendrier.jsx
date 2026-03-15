import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";

export default function Calendrier() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.sportTag}>JUDO</Text>
          <Text style={styles.headerTitle}>Calendrier</Text>
        </View>

        <Image
          source={require("../../assets/judo.png")} // adapte selon ton image
          style={styles.headerImage}
        />
      </View>

      {/* CALENDRIER */}
      <View style={styles.calendarContainer}>
        <Calendar
          theme={{
            selectedDayBackgroundColor: "#D32F2F",
            todayTextColor: "#D32F2F",
            arrowColor: "#D32F2F",
          }}
          markedDates={{
            "2025-12-18": { selected: true, selectedColor: "#D32F2F" },
          }}
        />
      </View>

      {/* HORAIRE */}
      <TouchableOpacity style={styles.timeSelector}>
        <Text style={styles.timeText}>18/12 à 7:00 PM</Text>
      </TouchableOpacity>

      {/* BOUTON */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>CONFIRMER</Text>
      </TouchableOpacity>

      {/* NAVIGATION BAS */}
      <View style={styles.tabBar}>
        <Text style={styles.tabActive}>INÍCIO</Text>
        <Text style={styles.tab}>BUSCAR</Text>
        <Text style={styles.tab}>EVENTOS</Text>
        <Text style={styles.tab}>PERFIL</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    backgroundColor: "#D32F2F",
    paddingTop: 50,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sportTag: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },

  headerImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },

  calendarContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
  },

  timeSelector: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D32F2F",
  },

  timeText: {
    color: "#D32F2F",
    fontSize: 16,
    fontWeight: "600",
  },

  confirmButton: {
    backgroundColor: "#D32F2F",
    marginTop: 20,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  confirmText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#ddd",
    marginTop: "auto",
  },

  tab: {
    color: "#777",
    fontSize: 12,
  },

  tabActive: {
    color: "#D32F2F",
    fontSize: 12,
    fontWeight: "bold",
  },
});
