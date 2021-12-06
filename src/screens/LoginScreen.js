import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, withTheme} from 'react-native-paper';
import {StackActions} from '@react-navigation/native';

import {AuthContext} from '../context/AuthContext';

const LoginScreen = ({navigation, theme}) => {
	const {colors} = theme;

	const {loggedIn} = useContext(AuthContext);

	useEffect(() => {
		if (loggedIn) {
			navigation.dispatch(StackActions.replace('Account'));
		}
	}, [loggedIn]);

	const {login} = useContext(AuthContext);

	return (
		<View style={[styles.container, {backgroundColor: colors.background}]}>
			<Button mode="contained" onPress={() => login()}>
				Login with Auth0
			</Button>
		</View>
	);
};

export default withTheme(LoginScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingRight: 30,
		paddingLeft: 30,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
