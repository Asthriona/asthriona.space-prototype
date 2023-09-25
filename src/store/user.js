import { defineStore } from 'pinia';

export const useUserStore = defineStore("user", {
    state: () => ({
        userId: "",
        displayName: "",
        discriminator: "",
        avatar: "",
        isAdmin: false,
        isVerified: false,
        selectedBadge: "",
        isAccountDisabled: false,
        isBanned: "",
        banHistory: [],
        isLoggedIn: false,
    }),
    actions: {
        setUser(user) {
            this.userId = user.userId,
            this.displayName = user.displayName,
            this.discriminator = user.discriminator,
            this.avatar = user.avatar,
            this.isAdmin = user.isAdmin
            this.isVerified = user.isVerified
            this.selectedBadge = user.selectedBadge,
            this.isAccountDisabled = user.isAccountDisabled,
            this.isBanned = user.isBanned,
            this.banHistory = user.banHistory,
            this.isLoggedIn = user.isLoggedIn
        }
    }
})