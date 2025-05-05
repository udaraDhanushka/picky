import {Text, StyleSheet} from 'react-native';
import {useState} from "react";

export default function Dashboard(){
    const [isLoading, setIsLoading] = useState(true);
    return(
        <Text style={styles.homeText}>
            Home Page
        </Text>
    )
}

const styles = StyleSheet.create({
    homeText: {
        color: 'red'
    }
})