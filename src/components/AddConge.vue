<template>
    <ion-page>
        <ion-content class="ion-padding">
            <ion-button id="open-modal" expand="block">Open Modal</ion-button>
            <ion-modal ref="modal" trigger="open-modal">
                <ion-toolbar>
                <ion-title>Modal</ion-title>
                <ion-buttons slot="end">
                    <ion-button color="light" @click="dismiss()">Close</ion-button>
                </ion-buttons>
                </ion-toolbar>
                <ion-list>
                <ion-item>
                    <ion-avatar slot="start">
                    <ion-img src="https://i.pravatar.cc/300?u=b"></ion-img>
                    </ion-avatar>
                    <ion-label>
                    <h2>Connor Smith</h2>
                    <p>Sales Rep</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-avatar slot="start">
                    <ion-img src="https://i.pravatar.cc/300?u=a"></ion-img>
                    </ion-avatar>
                    <ion-label>
                    <h2>Daniel Smith</h2>
                    <p>Product Designer</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-avatar slot="start">
                    <ion-img src="https://i.pravatar.cc/300?u=d"></ion-img>
                    </ion-avatar>
                    <ion-label>
                    <h2>Greg Smith</h2>
                    <p>Director of Operations</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-avatar slot="start">
                    <ion-img src="https://i.pravatar.cc/300?u=e"></ion-img>
                    </ion-avatar>
                    <ion-label>
                    <h2>Zoey Smith</h2>
                    <p>CEO</p>
                    </ion-label>
                </ion-item>
                </ion-list>
            </ion-modal>
        </ion-content>
    </ion-page>
</template>

<script>
  import {
    IonButtons,
    IonButton,
    IonModal,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonList,
    IonAvatar,
    IonImg,
    IonLabel,
  } from '@ionic/vue';

  export default ({
    name: 'AddConge',
    components: {
      IonButtons,
      IonButton,
      IonModal,
      IonContent,
      IonToolbar,
      IonTitle,
      IonItem,
      IonList,
      IonAvatar,
      IonImg,
      IonLabel,
    },
    methods: {
      dismiss() {
        this.$refs.modal.$el.dismiss();
      },
    },
  });
</script>

<style>
  ion-modal {
    --height: 50%;
    --border-radius: 16px;
    --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  ion-modal::part(backdrop) {
    background: rgb(0, 73, 184);
    opacity: 1;
  }

  ion-modal ion-toolbar {
    --background: rgb(14 116 144);
    --color: white;
  }
</style>
