import React, { useState } from 'react';
import { Expertise } from '../../migrations/00008-createExpertiseTable';

type Props = {
  expertAreas: Expertise[];
};

export default function SelectExpertise(props: Props) {
  // console.log('sind das die props mit expertAreas', props);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelection = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item),
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const expertAreas = props.expertAreas;
  const expertiseName = expertAreas.map((area) => area.expertiseName);
  console.log('expertiseName', expertiseName);

  const sandwichContents = ['cheese', 'lettuce', 'tomato', 'bacon'];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Select expert area:</h1>

      <div className="flex flex-wrap gap-2 mb-4">
        {selectedItems.map((item) => (
          <button
            key={`item-${item}`}
            type="button"
            className="bg-blue-500 text-white px-3 py-1 rounded-full"
            onClick={() => toggleSelection(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {expertiseName.map((item) => (
          <button
            key={`item-${item}`}
            type="button"
            className={`bg-gray-300 text-gray-700 px-3 py-1 rounded-full ${selectedItems.includes(item) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={() => toggleSelection(item)}
            disabled={selectedItems.includes(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
