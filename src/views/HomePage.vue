<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title>Liste Employées</ion-title>
        <ion-icon :icon="person" size="large" slot="end"></ion-icon>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-list>
        <ion-item v-for="i in 5" :key="i">
          <ion-avatar slot="start">
            <img src="../assets/alicia_keys.jpg" id="open-modal-img" @click="showImg = true"/>
          </ion-avatar>
          <ion-label id="open-modal-employe" @click="showEmploye = true">
            <h2>Nom {{ i }}</h2>
            <p>Prenom {{ i }}</p>
          </ion-label>
          <ion-button color="tertiary" id="open-modal-conge" @click="addConge = true">
            <ion-icon :icon="add"></ion-icon>
          </ion-button>
          <ion-button color="success">
            <ion-icon slot="icon-only" :icon="create"></ion-icon>
          </ion-button>
          <ion-button color="danger">
            <ion-icon slot="icon-only" :icon="trash"></ion-icon>
          </ion-button>
        </ion-item>
      </ion-list>

      <ion-modal trigger="open-modal-conge" id="modal-conge" v-if="addConge === true">
        <ion-toolbar color="tertiary">
          <ion-title>Ajouter Congé</ion-title>
        </ion-toolbar>
        <ion-content class="ion-padding">
          <ion-label>Début</ion-label>
          <ion-datetime-button datetime="datetime"></ion-datetime-button>
          <ion-modal :keep-contents-mounted="true">
            <ion-datetime id="datetime"></ion-datetime>
          </ion-modal>
          <br>
          <ion-label>Fin</ion-label>
          <ion-datetime-button datetime="datetime"></ion-datetime-button>
          <ion-modal :keep-contents-mounted="true">
            <ion-datetime id="datetime"></ion-datetime>
          </ion-modal>
          <ion-button color="success">
            <ion-icon :icon="checkmark"></ion-icon>
          </ion-button>
        </ion-content>
      </ion-modal>

      <ion-modal trigger="open-modal-employe" v-if="showEmploye === true">
        <ion-toolbar color="tertiary">
          <ion-title>Employé</ion-title>
        </ion-toolbar>
        <ion-content class="ion-padding">
          <h2>Nom</h2>
          <p>Prenom</p>
        </ion-content>
      </ion-modal>

      <ion-modal trigger="open-modal-img" v-if="showImg === true">
        <ion-toolbar color="tertiary">
          <ion-title>Image</ion-title>
        </ion-toolbar>
        <ion-content class="ion-padding">
          <img src="../assets/alicia_keys.jpg"/>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonButton,
  IonModal,
  IonDatetime,
  IonDatetimeButton
} from '@ionic/vue';

import { person, create, add, trash, checkmark } from 'ionicons/icons';

export default {
  data() {
    return {
      person,
      create,
      add,
      trash,
      checkmark,
      addConge:false,
      showEmploye:false,
      showImg:false
    };
  },
  components:{
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonButton,
    IonModal,
    IonDatetime,
    IonDatetimeButton
  },
  methods: {
    /* async openModal() {
        const modal = await modalController.create({
          component: AddConge,
        });
        await modal.present();
    }, */
    dismiss() {
      this.$refs.modal.$el.dismiss();
    },
  },
}
</script>

<style scoped>
ion-modal {
  --height: 50%;
  --border-radius: 16px;
  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

ion-modal::part(backdrop) {
  background: rgba(209, 213, 219);
  opacity: 1;
}

ion-modal ion-toolbar {
  --background: rgb(14 116 144);
  --color: white;
}
</style>
