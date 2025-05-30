export const observerMixin = {
    observers: new Set(),

    addObserver(observer) {
        this.observers.add(observer);
    },

    removeObserver(observer) {
        this.observers.delete(observer);
    },

    notify() {
        this.observers.forEach((observer) => observer());
    }
};



export const saveMixing = {
    observers: new Set(),


    addSaveObserver(observer) {
        this.observers.add(observer);
    },

    removeSaveObserver(observer) {
        this.observers.delete(observer);
    },

    notifySave(item) {
        this.observers.forEach((observer) => observer(item));
    }
};


export const unsaveMixing = {
    observers: new Set(),


    addUnsaveObserver(observer) {
        this.observers.add(observer);
    },

    removeUnsaveObserver(observer) {
        this.observers.delete(observer);
    },

    notifyUnsave(id) {
        this.observers.forEach((observer) => observer(id));
    }
}