import React, {useEffect, useState} from 'react';
import {PermissionsAndroid,ScrollView , Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Avatar, ListItem} from 'react-native-elements';
import Contacts from 'react-native-contacts';

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg',
    subtitle: 'Vice Chairman',
  },
];

const App = () => {
  const [contactList, setContactList] = useState([]);
  const avatar_url =
    'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg';


  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    })
      .then(() => Contacts.getAll())
      // eslint-disable-next-line handle-callback-err
      .then((contacts) => {
        // console.log(contacts);
        console.log(contacts[0].phoneNumbers[0].number);
        contacts.forEach(item => {
          console.log(item.displayName)

        })

        setContactList(contacts);
      });
  }, []);

  return (
    <SafeAreaProvider>
      <ScrollView>
        {contactList.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar rounded source={{uri: avatar_url}} />
            <ListItem.Content>
              <ListItem.Title>{item.displayName}</ListItem.Title>
              <ListItem.Subtitle>{item.givenName}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>

    </SafeAreaProvider>
  );
};

export default App;
