import React from 'react';
import { TextInput } from 'react-native';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <TextInput
        style={{color: '#fff', fontSize: 20, borderColor: 'gray', borderWidth: 1}}
        placeholder='Search history'
        placeholderTextColor={'#fff'}
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
    />
);

export default SearchBar;
