import React, {useEffect, useContext} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/native';

import {AuthContext} from '../context/AuthContext';

function LoadingScreen({navigation}) {
	const {loading, loggedIn} = useContext(AuthContext);

	useEffect(() => {
		if (loggedIn) {
			navigation.dispatch(StackActions.replace('Account'));
		} else if (loggedIn === false) {
			navigation.dispatch(StackActions.replace('Login'));
		}
	}, [loggedIn]);

	return (
		<View style={styles.container}>
			{loading && (
				<React.Fragment>
					<ActivityIndicator size="large" />
					<View style={{marginTop: 10}}>
						<Text>Please wait...</Text>
					</View>
				</React.Fragment>
			)}
		</View>
	);
}

export default LoadingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
