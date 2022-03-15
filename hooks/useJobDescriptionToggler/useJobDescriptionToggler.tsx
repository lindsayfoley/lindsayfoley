import { useState } from "react";

const useJobDescriptionToggler = (companyId: string) => {
  const [cardsWithVisibleDetails, setCardsWithVisibleDetails] = useState<
    string[]
  >([]);

  const hasVisibleDescription = (id: string) =>
    cardsWithVisibleDetails.includes(id);

  const handleCardInteraction = (id: string) => {
    let allCardsWithVisibleDetails: string[] = [...cardsWithVisibleDetails];

    if (hasVisibleDescription(id)) {
      allCardsWithVisibleDetails = cardsWithVisibleDetails.filter(
        (cardId) => cardId !== id,
      );
    } else {
      allCardsWithVisibleDetails.push(id);
    }

    setCardsWithVisibleDetails(allCardsWithVisibleDetails);
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (
      event.key === " " ||
      event.key === "Enter" ||
      event.key === "Spacebar"
    ) {
      handleCardInteraction(companyId);
    }
  };

  return {
    hasVisibleDescription,
    handleCardInteraction,
    handleOnKeyDown,
  };
};

export default useJobDescriptionToggler;
