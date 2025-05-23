<template>
    <q-header elevated class="bg-white text-black">
        <q-toolbar class="q-px-xl">

            <!-- Logo -->
            <router-link to="/" class="flex items-center no-decoration text-black">
                <q-avatar square size="36px" class="bg-primary text-white text-bold">T</q-avatar>
                <span class="text-h6 q-ml-sm text-bold">Tayyorla</span>
            </router-link>

            <!-- Katta ekranlar uchun navigatsiya -->
            <div class="q-gutter-md q-ml-xl row items-center hidden-md">
                <q-btn flat dense :label="t('cv')" to="/cv" class="text-weight-medium" active-class="text-primary" />
                <q-btn flat dense :label="t('resume')" to="/resume" class="text-weight-medium"
                    active-class="text-primary" />
                <q-btn flat dense :label="t('coverLetter')" to="/cover-letter" class="text-weight-medium"
                    active-class="text-primary" />
                <q-btn flat dense :label="t('obyektivka')" to="/obyektivka" class="text-weight-medium"
                    active-class="text-primary" />
            </div>

            <q-space />

            <!-- Til tanlash -->
            <q-select v-model="locale" :options="locales" dense borderless emit-value map-options class="q-mr-md"
                style="width: 90px" dropdown-icon="language" />

            <!-- Auth tugmalari -->
            <q-btn unelevated rounded color="primary" :label="t('signIn')" to="/signin" class="q-mr-sm" />
            <q-btn flat rounded color="primary" :label="t('signUp')" to="/signup" class="text-weight-medium" />

            <!-- Mobil menyu -->
            <q-btn flat dense round icon="menu" class="visible-xs" @click="drawer = !drawer" />
        </q-toolbar>

        <!-- Mobil drawer -->
        <q-drawer v-model="drawer" side="right" overlay behavior="mobile" class="bg-white text-black">
            <q-list>
                <q-item to="/cv" clickable v-close-popup>
                    <q-item-section>{{ t('cv') }}</q-item-section>
                </q-item>
                <q-item to="/resume" clickable v-close-popup>
                    <q-item-section>{{ t('resume') }}</q-item-section>
                </q-item>
                <q-item to="/cover-letter" clickable v-close-popup>
                    <q-item-section>{{ t('coverLetter') }}</q-item-section>
                </q-item>
                <q-item to="/obyektivka" clickable v-close-popup>
                    <q-item-section>{{ t('obyektivka') }}</q-item-section>
                </q-item>
                <q-separator />
                <q-item to="/signin" clickable v-close-popup>
                    <q-item-section>{{ t('signIn') }}</q-item-section>
                </q-item>
                <q-item to="/signup" clickable v-close-popup>
                    <q-item-section>{{ t('signUp') }}</q-item-section>
                </q-item>
            </q-list>
        </q-drawer>
    </q-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

interface LangOption {
    label: string;
    value: string;
}

const locales: LangOption[] = [
    { label: 'Oʻzbek', value: 'uz-UZ' },
    { label: 'Русский', value: 'ru-RU' },
    { label: 'English', value: 'en-US' }
];


const drawer = ref(false)
</script>

<style scoped>
.no-decoration {
    text-decoration: none;
}
</style>