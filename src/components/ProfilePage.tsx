import { 
    View,
    Text,
    StyleSheet, 
    Pressable 
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    onBack: () => void;
    onLogout: () => void;
};

export default function Profile({
    onBack,
    onLogout,
    }: Props) {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={onBack}
          style={styles.backButton}
          >
           <AntDesign
              name="arrow-left"
              size={24}
              color="#FFFFFF"
            />
        </Pressable>
        <View 
        style={styles.avatar}>
            <AntDesign name="user" size={40} color="#A811DA" />
        </View>
        <Text 
        style={styles.name}>
            Tursynbek M
        </Text>
        <Text 
        style={styles.group}>
            Group IS-25-4K
        </Text>
      </View>

      <View 
      style={styles.menu}>
        <Pressable 
        style={styles.menuItem}>
            <AntDesign name="user" size={20} color="#6B6A73" />
            <Text style={styles.menuText}>
                Жеке информация
            </Text>
        </Pressable>
        <Pressable 
        style={styles.menuItem}>
            <AntDesign name="bell" size={20} color="#6B6A73" />
            <Text style={styles.menuText}>
                Хабарламалар
            </Text>
        </Pressable>
        <Pressable 
        style={styles.menuItem}>
            <AntDesign name="setting" size={20} color="#6B6A73" />
            <Text style={styles.menuText}>
                Баптаулар
            </Text>
        </Pressable>
        <Pressable 
        style={styles.menuItem}>
            <AntDesign name="question-circle" size={20} color="#6B6A73" />
            <Text style={styles.menuText}>
                Көмек көрсету
            </Text>
        </Pressable>
        <Pressable 
        style={[styles.menuItem, { marginTop: 20 }]}
            onPress={onLogout}
            >
            <AntDesign name="logout" size={20} color="#FF3B30"/>
            <Text 
            style={[styles.menuText, { color: '#FF3B30' }]}>
                Шығу
            </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        left: 20,
        top: 55,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },

  container: { 
    flex: 1,
     backgroundColor: '#F8F8FA' 
    },
  header: { 
    backgroundColor: '#A811DA', 
    paddingTop: 60, 
    paddingBottom: 30, 
    alignItems: 'center', 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
    },
  avatar: { 
    width: 80, 
    height: 80, 
    backgroundColor: '#fff', 
    borderRadius: 40, 
    justifyContent: 'center', 
    alignItems: 'center', 
    },
  name: {
     color: '#fff', 
     fontSize: 20, 
     fontWeight: '700', 
     marginTop: 12 
    },
  group: { 
    color: '#fff', 
    opacity: 0.8, 
    marginTop: 4, 
    },
  menu: { 
    backgroundColor: '#fff', 
    margin: 16, 
    borderRadius: 18, 
    padding: 10 
    },
  menuItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 16, 
    paddingHorizontal: 10, 
    gap: 12, 
    borderBottomWidth: 1, 
    borderBottomColor: '#F1F0F4', 
    },
  menuText: { 
    fontSize: 16, 
    color: '#1B1923', 
    },
});