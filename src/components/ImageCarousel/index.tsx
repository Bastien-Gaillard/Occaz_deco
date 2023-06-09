import { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Carousel from 'react-native-carousel-banner';

export default function ImageCarousel({ images }) {

  let ScreenHeight = Dimensions.get('window').height;

  const [array, setArray] = useState<any>();
  const [active, setActive] = useState(0);
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'row',

      minWidth: '100%',
      height: ScreenHeight / 1.8,
    },
    image: {
      position: 'relative',
      width: '100%',
      height: '100%',
    },
  });

  useEffect(() => {

    if (!!images[0]) {
      let temp: any = [];
      images.forEach(image => {
        temp.push(image?.image)
      });
      setArray(temp);
    } else {
      setArray(['http://51.91.249.126:3010/images/categories/noProduct.png'])
    }

  }, []);

  return (

    <View style={styles.container}>

      {!!array &&
        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          < Carousel data={array} roundedSize={5} height='100%' autoplay={false} onChange={(value) => setActive(value)} />
          <View style={{ position: 'absolute', bottom: 60, display: 'flex', flexDirection: 'row' }}>
            {array.map((image, index) => (
              <View style={{ backgroundColor: active == index ? '#303030' : '#F0F0F0', height: 4, width: 15, marginHorizontal: 6, borderRadius: 4 }}></View>
            ))}
          </View>
        </View>
      }
    </View>
  );
};