import React, { Component } from 'react';

import './App.css';


// Import Ionic 5 styles
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';


import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton
} from '@ionic/react';

import axios from 'axios';


class App extends Component {
  // API_KEY = '91d819b69e6d4c43953cefa5815517eb';
  API_URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=91d819b69e6d4c43953cefa5815517eb`

  state = {
    items: []
  }

  componentDidMount() {
    axios.get(this.API_URL).then(response => response.data)
    .then((data) => {
      this.setState({ items: data.articles })
      console.log(this.state.items)
     })
  }
  render() {
    return (
      <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>The Brief</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {this.state.items.map((item) => (
                <IonCard>
                  
                  <img src={item.urlToImage}/>
                <IonCardHeader>

                <IonCardTitle>
                {item.title}

                </IonCardTitle>
                 <IonCardSubtitle>
                    {item.author}
                  </IonCardSubtitle>

                </IonCardHeader>
                <IonCardContent>
                  <p>{item.content}</p>
                  <IonButton href={item.url}>Read More</IonButton>
                </IonCardContent>
                </IonCard>

      ))}

      </IonContent>
    </IonApp>

    );
  }
}

export default App;
