import { 
    View, 
    Text, 
    StyleSheet, 
    Pressable 
} from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
type Props = {
  onBack: () => void;
};

const services = [
  { name: 'GPA калькуляторы', icon: 'calculator' },
  { name: 'Сауалнамалар', icon: 'form' },
  { name: 'Жатақхана', icon: 'home' },
  { name: 'Анықтамалар', icon: 'profile' },
];

export default function Services({onBack}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={onBack}>
            <AntDesign name="arrow-left" size={24} color="#FFFFFF"
        />
        </Pressable>
        <Text style={styles.headerTitle}><EvilIcons name="refresh" size={24} color="black" /></Text>
        <Text style={styles.headerSub}>Сервистер</Text>
      </View>

      <View style={styles.grid}>
        {services.map((s) => (
          <Pressable key={s.name} style={styles.gridItem}>
            <View style={styles.iconCircle}>
              <AntDesign name={s.icon as any} size={26} color="#A811DA" />
            </View>
            <Text style={styles.gridText}>{s.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F8F8FA', 
   },
  header: { 
    backgroundColor: '#A811DA', 
    paddingTop: 50, 
    paddingBottom: 20, 
    paddingHorizontal: 20, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
   },
  headerTitle: { 
    color: '#fff', 
    fontSize: 16, 
    opacity: 0.8, 
   },
  headerSub: { 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: '700' 
   },
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    padding: 16, 
    gap: 16, 
    justifyContent: 'space-between', 
   },
  gridItem: { 
    width: '47%', 
    height: 130, 
    backgroundColor: '#fff', 
    borderRadius: 18, 
    justifyContent: 'center', 
    alignItems: 'center', 
   },
  iconCircle: { 
    width: 60, 
    height: 60, 
    backgroundColor: '#F8E6FF', 
    borderRadius: 30, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10, 
   },
  gridText: { 
    fontWeight: '600', 
    color: '#1B1923', 
   },
});