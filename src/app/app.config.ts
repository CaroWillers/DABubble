import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyBEW58gWkCv2C2_c-YTDcUub0mN_OSAlpM",
        authDomain: "dabubble-2aa7a.firebaseapp.com",
        projectId: "dabubble-2aa7a",
        storageBucket: "dabubble-2aa7a.firebasestorage.app",
        messagingSenderId: "324681754463",
        appId: "1:324681754463:web:d6b79ff4c89706b64f38ea"
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
};
