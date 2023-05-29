import React from 'react';
import {
  FlatList,
  Animated,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';

const ITEM_MARGIN_BOTTOM = 20;
const ITEM_PADDING = 10;
const IMG_HEIGHT = 100;
const ITEM_SIZE = IMG_HEIGHT + ITEM_PADDING * 2 + ITEM_MARGIN_BOTTOM;


const List = (props) => {
  const { items } = props;

  const scrollY = React.useRef(new Animated.Value(0)).current;


  const renderItem = ({ item, index }) => {
    const scale = scrollY.interpolate({
      inputRange: [
        -1, 0,
        ITEM_SIZE * index,
        ITEM_SIZE * (index + .5)
      ],
      outputRange: [1, 1, 1, 0]
    })

    const opacity = scrollY.interpolate({
      inputRange: [
        -1, 0,
        ITEM_SIZE * index,
        ITEM_SIZE * (index + .5)
      ],
      outputRange: [1, 1, 1, 0]
    })
    return (
      <Animated.View style={[
        styles.item,
        {
          transform: [{ scale }],
          opacity
        }
      ]}>

        <View style={styles.wrapText}>
          <Text style={styles.fontSize}>Slidename : {item.name}{'\n'}{item.description}{'\n'}Slide No. : {item.slide}</Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        data={items}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `key-${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          padding: 20,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />

    </SafeAreaView>
  );
};
const mapStateToProps = state => ({
  items: state.items
});
export default connect(mapStateToProps)(List);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9169'
  },
  fontSize: {
    fontSize: 18,
    color: 'grey',
  },
  image: {
    width: 100,
    height: IMG_HEIGHT,
  },
  wrapText: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    marginBottom: ITEM_MARGIN_BOTTOM,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    padding: ITEM_PADDING,
    height: 150,
    margin: 50,
    backgroundColor: 'pink'
  },
});
