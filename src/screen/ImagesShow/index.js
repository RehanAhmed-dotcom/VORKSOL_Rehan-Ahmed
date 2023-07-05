import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {bufferUrl, login, normalUrl} from '../../lib/api';

import {Buffer} from 'buffer';
import {encode} from 'base64-js';

import base64 from 'react-native-base64';
import ImageToBase64 from 'react-native-image-base64';
import styles from './style';
const ImagesShow = () => {
  const [bufferImage, setBufferImage] = useState('');
  const [normalImage, setNormalImage] = useState('');
  useEffect(() => {
    bufferUrl().then(async res => {
      const bufferTo64 = await base64.encode(res);
      setBufferImage(bufferTo64);

      // setBufferImage(Buffer.from(res, 'binary').toString('base64'));

      // const buffer = Buffer.from(res);

      // const base64String = buffer.toString('base64');
      // console.log('mybuffer', base64String);
      // setBufferImage(base64String);
      // Assuming you have a buffer array called "bufferArray"

      // Step 1: Convert the buffer array to a Uint8Array
      //   const uint8Array = new Uint8Array(res);
      //   console.log('uinit8array', uint8Array);
      //   // Step 2: Encode the Uint8Array to base64
      //   const base64String = await encode(res);

      //   // The 'base64String' variable now contains the base64 representation of the buffer array
      //   console.log('my base', base64String);
      // ImageToBase64.getBase64String(res)
      //   .then(base64String => {
      //     // Use the base64 string as needed (e.g., set it as the source of an image component)
      //     setBufferImage(base64String);
      //     console.log('base64String', base64String);
      //   })
      //   .catch(error => {
      //     console.log('error', error);
      //   });

      // const base64String = btoa(String.fromCharCode(...new Uint8Array(res)));
      // console.log('base64imagepath', base64String);
      // var binary = '';
      // var bytes = [].slice.call(new Uint8Array(res));
      // bytes.forEach(b => (binary += String.fromCharCode(b)));
      // const base64Object = window.btoa(binary);
      // console.log('base 64 object', base64Object);

      // const myObject = res.toString('base64');
      // console.log('myObject', myObject);

      // const myBuffer = new Buffer.from(res).toString('base64');
      // setBufferImage(myBuffer);
    });
    normalUrl().then(res => {
      // console.log('res of normal', res);
      setNormalImage(res);
    });
  }, []);
  return (
    <View style={styles.main}>
      <View>
        <View style={{alignItems: 'center', width: 250}}>
          <Text style={{color: 'black', marginBottom: 10}}>Normal Image</Text>
          <Image
            source={{
              uri: `data:image/jpeg;base64,${normalImage}`,
            }}
            resizeMode="cover"
            style={{height: 200, width: 250}}
          />
        </View>
        <View style={{alignItems: 'center', width: 250}}>
          <Text style={{color: 'black', marginVertical: 10}}>
            Array Buffer Image
          </Text>
          <Image
            source={{
              uri: `data:image/jpeg;base64,${bufferImage}`,
            }}
            resizeMode="cover"
            style={{height: 200, width: 250}}
          />
        </View>
      </View>
    </View>
  );
};

export default ImagesShow;
