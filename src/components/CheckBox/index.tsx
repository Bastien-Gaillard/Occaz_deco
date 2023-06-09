import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './style'
import Icon from 'react-native-vector-icons/AntDesign';
export default function CheckBoxInput({ label, selected, style, onChange }) {
  const [isSelected, setSelection] = useState(selected);
  const [background, setBackground] = useState({ backgroundColor: '#ffffff' });

  useEffect(() => {
    if (isSelected) {
      setBackground({ backgroundColor: '#8D9BB5' });
    } else {
      setBackground({ backgroundColor: '#ffffff' })
    }
    onChange(isSelected)
  }, [isSelected]);


  return (
    <View style={styles.container}>
      <View style={[styles.checkBox, style, background]} onTouchStart={() => setSelection(!isSelected)}>
        {isSelected && <Icon name="check" size={20} color="#ffffff" />
        }
      </View>
      <Text style={[styles.label, style]}>{label}</Text>

    </View>
  );
};