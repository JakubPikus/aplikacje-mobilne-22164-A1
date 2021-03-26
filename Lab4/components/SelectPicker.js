import React, { Component, Suspense, useState } from 'react';
import { Text, View } from 'react-native';
import Select from "./Select";
import styles from './styles';




export default function SelectPicker(){
  const [category, setCategory] = useState([
    { label: "Wybierz...", value: null },
    { label: "FPS", value: "FPS" },
    { label: "Akcji", value: "Akcji" },
    { label: "RTS", value: "RTS" },
    { label: "RPG", value: "RPG" },
    { label: "Wyścigowa", value: "Wyscigowa" }
  ]);
  const [games, setGames] = useState([
    { label: "Wybierz...", value: null, category: ["FPS", "Akcji", "RTS", "RPG", "Wyscigowa"] },
    { label: "Cyberpunk 2077", value: 1, category: ["RPG", "FPS", "Akcji"] },
    { label: "Gothic 2", value: 2, category: ["RPG", "Akcji"] },
    { label: "Counter-Strike", value: 3, category: ["FPS"] },
    { label: "Command & Conquer", value: 4, category: ["RTS"] },
    { label: "Need For Spead Heat", value: 5, category: ["Wyscigowa", "Akcji"] },
    { label: "Starcraft 2", value: 6, category: ["RTS", "Akcji"] },

  ]);
  const [availableGames, setAvailableGames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGames, setSelectedGames] = useState(null);
  const [selection, setSelection] = useState("");

  return (
    <View style={styles.SelectPickerView}>
      <View style={styles.SelectPickerViewText}>
        <View style={styles.SelectPickerViewText2}>
          <Select
            label="Kategoria"
            items={category}
            selectedValue={selectedCategory}
            onValueChange={size => {
              setSelectedCategory(size);
              setSelectedGames(null);
              setAvailableGames(games.filter(i => i.category.includes(size)));
            }}
          />
        </View>
      </View>
      <View style={styles.SelectPickerViewText}>
        <View style={styles.SelectPickerViewText2}>
          <Select
            label="Gra"
            items={availableGames}
            selectedValue={selectedGames}
            onValueChange={garment => {
              setSelectedGames(garment);
              setSelection(
                `${selectedCategory} ${games.find(i => i.value === garment).label}`
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}
