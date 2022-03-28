import { useState } from "react";

const useJobDescriptionToggler = () => {
  const [cardsWithVisibleDetails, setCardsWithVisibleDetails] = useState<
    string[]
  >([]);

  const hasVisibleDescription = (id: string) =>
    cardsWithVisibleDetails.includes(id);

  const handleCardInteraction = (id: string) => {
    let allCardsWithVisibleDetails = [...cardsWithVisibleDetails];

    if (hasVisibleDescription(id)) {
      allCardsWithVisibleDetails = cardsWithVisibleDetails.filter(
        (cardId) => cardId !== id,
      );
    } else {
      allCardsWithVisibleDetails.push(id);
    }

    setCardsWithVisibleDetails(allCardsWithVisibleDetails);
  };

  const keyboardEventKeyIds = ["Enter", "Spacebar"];

  const handleOnKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
    id: string,
  ) => {
    if (keyboardEventKeyIds.includes(event.key)) {
      handleCardInteraction(id);
    }
  };

  return {
    hasVisibleDescription,
    handleCardInteraction,
    handleOnKeyDown,
  };
};

export default useJobDescriptionToggler;
