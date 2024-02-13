/* global game */

export class Renown {
  // Function to help with quickly grabbing all the listed values;
  // Will only retrieve objects (definitions)
  static getList() {
    return Object.entries(this)
      .filter(([key, value]) => typeof value === 'object' && value !== null && !Array.isArray(value))
      .map(([key, value]) => ({ [key]: value }))
  }

  // Localize the labels
  static initializeLabels() {
    for (const [key, value] of Object.entries(this)) {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        value.label = game.i18n.localize(value.label)
      }
    }
  }
  
  // Run any necessary compilation on ready
  static onReady() {
    Renown.initializeLabels()
  }
  
  static glory = {
    label: 'WOD5E.WTA.Glory'
  }

  static honor = {
    label: 'WOD5E.WTA.Honor'
  }

  static wisdom = {
    label: 'WOD5E.WTA.Wisdom'
  }
}

// Hook to call onReady when the game is ready
Hooks.once('ready', Renown.onReady)