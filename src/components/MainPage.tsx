import { 
View, 
Text, 
StyleSheet, 
ScrollView, 
Pressable 
} from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  onBack: () => void;
  onContinue: () => void;
  onProfile: () => void;
  onServices: () => void;
};

export default function MainPage({
  onBack,
  onContinue,
  onProfile,
  onServices,
}: Props) {
  return (
    <View style={styles.container}>
      
      <View 
      style={styles.header}>
        <Text 
        style={styles.headerTitle}>
          <Pressable onPress={onProfile}>
          <Ionicons name="person-circle" size={40} color="black" />
          </Pressable>
        </Text>
        <Text 
        style={styles.headerName}>
          Tursynbek M
        </Text>
      </View>

      <ScrollView 
      style={styles.body}>
        <Text style={styles.sectionTitle}>
          Модульдер
        </Text>
        
        <View style={styles.card}>
        <View style={styles.iconCircle}>
        <AntDesign name="form" size={26} color="#A811DA" />
        </View>

       <Text style={styles.cardTitle}>
          Онлайн тіркелу
       </Text>
      </View>

       <Pressable
      style={styles.card}
      onPress={onServices}
      >
     <View style={styles.iconCircle}>
     <AntDesign name="appstore" size={26} color="#A811DA" />
     </View>

     <Text style={styles.cardTitle}>
       Сервистер
     </Text>
     </Pressable>
        
        <Text 
        style={styles.sectionTitle}>
          Қосымша модульдер
        </Text>
        <View 
        style={styles.quickRow}>
          <Pressable 
          style={styles.quickItem}>
            <AntDesign name="schedule" size={24} color="black" />
            <Text>
              Журнал
            </Text>
          </Pressable>
          <Pressable 
          style={styles.quickItem}>
            <AntDesign name="calendar" size={24} color="black" />
            <Text>
              Оқу кестесі
            </Text>
              </Pressable>
          <Pressable style={styles.quickItem}>
            <AntDesign name="scan" size={24} color="black" />
            <Text>
              QR код
            </Text>

          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F8F8FA' 
  },
  header: { 
    backgroundColor: '#A811DA', 
    paddingTop: 50, 
    paddingBottom: 20, 
    paddingHorizontal: 20, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20 
  },
  headerTitle: { 
    color: '#fff', 
    fontSize: 16, 
    opacity: 0.8 
  },
  headerName: { 
    color: '#fff', 
    fontSize: 22, 
    fontWeight: '700', 
    marginTop: 4 
  },
  body: { 
    padding: 20 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: '700', 
    marginBottom: 12, 
    marginTop: 10, 
    color: '#1B1923' 
  },
  card: { 
    backgroundColor: '#fff', 
    flexDirection: 'row', 
    padding: 12, 
    borderRadius: 16, 
    marginBottom: 10, 
    alignItems: 'center' 
  },
  cardImage: { 
    width: 50, 
    height: 50, 
    backgroundColor: '#E9E8F0', 
    borderRadius: 10, 
    marginRight: 12 
  },
  cardTitle: { 
    fontWeight: '600', 
    color: '#1B1923' 
  },
  cardDate: { 
    color: '#AAA9B2', 
    fontSize: 12, 
    marginTop: 2 
  },
  quickRow: { 
    flexDirection: 'row',
     justifyContent: 'space-between' 
    },
  quickItem: { 
    backgroundColor: '#fff', 
    width: '30%', 
    height: 80, 
    borderRadius: 16, 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 6 
  },

  iconCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#F8E6FF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

});