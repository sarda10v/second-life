import React from "react";
import style from "../PetsCard/petsCard.module.css";

const PetsCard = ({ searchFiltered }) => {
  return (
    <div>
      {!searchFiltered.length ? (
        <div className={style.sectorСlear}>
          <h2>Ничего не найдено...</h2>
        </div>
      ) : (
        <div className={style.cardPetsRender}>
          {searchFiltered.map((item, index) => {
            return (
              <div className={style.card} key={index}>
                <div className={style.headPetsCard}>
                  <div className={style.agePets}>
                    <span>4</span>месяцев
                  </div>
                  <div className={style.iconPets}>
                    <div className={style.iconOne}>
                      <ion-icon name="checkmark-outline"></ion-icon>
                    </div>
                    <div className={style.iconTwo}>
                      <ion-icon name="file-tray-outline"></ion-icon>
                    </div>
                  </div>
                </div>
                <div className={style.bodyPetsCard}>
                  <div className={style.imgPetsCard}>
                    <img src={item.image} alt="pet"></img>
                  </div>
                  <div className={style.titlePetsCard}>{item.name}</div>
                  <div className={style.discriptionPetsCard}>
                    {item.discription}
                  </div>
                </div>
                <div className={style.footerPetsCard}>
                  <div className={style.namePetsCard}>{item.gender}</div>
                  <div className={style.iconThree}>
                    <ion-icon name="paw-outline"></ion-icon>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* <button className={style.dowloadMoreBtn}>Загрузить еще</button> */}
    </div>
  );
};

export default PetsCard;
