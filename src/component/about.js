import React from 'react'
import './about.css'

export default function About() {
  return (
    <>
  <div className="main-container"  id="about">
    <div className="teamy-team">
      <div className="scroller">
        <div className="scroller__item">
          <div className="teamy teamy_mask-circle" aria-labelledby="person1">
            <div className="teamy__content" id="person1">
              <span className="teamy__name">Suzan Lois</span>
              <span className="teamy__post">Graphic Designer</span>
            </div>
            <div className="teamy__layout">
              <div className="teamy__front">
                <img
                  src="https://images.unsplash.com/photo-1595072009558-430d78d6bf3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                  className="teamy__avatar"
                  alt="Suzan Lois' photo"
                />
              </div>
              <div className="teamy__back">
                <div className="teamy__back-content">
                  <button
                    className="teamy__open r-button"
                    onclick="openDialog('popup-article', this)"
                  >
                    <span className="button">show more</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroller__item">
          <div
            className="teamy teamy_mask-circle teamy_zoom-photo"
            aria-labelledby="person2"
          >
            <div className="teamy__content" id="person2">
              <span className="teamy__name">Dora Caelan</span>
              <span className="teamy__post">HR-manager</span>
            </div>
            <div className="teamy__layout">
              <div className="teamy__front">
                <img
                  src="https://images.unsplash.com/photo-1595102298291-82c1014f413a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                  className="teamy__avatar"
                  alt="Dora Caelan's photo"
                />
              </div>
              <div className="teamy__back">
                <div className="teamy__back-content">
                  <button
                    className="teamy__open r-button"
                    onclick="openDialog('popup-article', this)"
                  >
                    <span className="button">show more</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroller__item">
          <div
            className="teamy teamy_mask-circle teamy_zoom-rotate-photo"
            aria-labelledby="person3"
          >
            <div className="teamy__content" id="person3">
              <span className="teamy__name">Rosanna Pattie</span>
              <span className="teamy__post">Illustrator</span>
            </div>
            <div className="teamy__layout">
              <div className="teamy__front">
                <img
                  src="https://images.unsplash.com/photo-1595205992522-bd8aee51cfbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                  className="teamy__avatar"
                  alt="Rosanna Pattie's photo"
                />
              </div>
              <div className="teamy__back">
                <div className="teamy__back-content">
                  <button
                    className="teamy__open r-button"
                    onclick="openDialog('popup-article', this)"
                  >
                    <span className="button">show more</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroller__item">
          <div
            className="teamy teamy_mask-circle teamy_zoom-slide-photo"
            aria-labelledby="person4"
          >
            <div className="teamy__content" id="person4">
              <span className="teamy__name">Rose Alpha</span>
              <span className="teamy__post">Photographer</span>
            </div>
            <div className="teamy__layout">
              <div className="teamy__front">
                <img
                  src="https://images.unsplash.com/photo-1595169269488-02a14b7197c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                  className="teamy__avatar"
                  alt="Rose Alpha's photo"
                />
              </div>
              <div className="teamy__back">
                <div className="teamy__back-content">
                  <button
                    className="teamy__open r-button"
                    onclick="openDialog('popup-article', this)"
                  >
                    <span className="button">show more</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroller__item">
          <div className="teamy teamy_mask-triangle" aria-labelledby="person5">
            <div className="teamy__content" id="person5">
              <span className="teamy__name">Tyson Amery</span>
              <span className="teamy__post">UI designer</span>
            </div>
            <div className="teamy__layout">
              <div className="teamy__front">
                <img
                  src="https://images.unsplash.com/photo-1594840295384-3aad16925a4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                  className="teamy__avatar"
                  alt="Tyson Amery's photo"
                />
              </div>
              <div className="teamy__back">
                <div className="teamy__back-content">
                  <button
                    className="teamy__open r-button"
                    onclick="openDialog('popup-article', this)"
                  >
                    <span className="button">show more</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroller__item">
          <div
            className="teamy teamy_mask-triangle teamy_zoom-photo"
            aria-labelledby="person6"
          >
            <div className="teamy__content" id="person6">
              <span className="teamy__name">Stas Melnikov</span>
              <span className="teamy__post">UI developer</span>
            </div>
            <div className="teamy__layout">
              <div className="teamy__front">
                <img
                  src="https://images.unsplash.com/photo-1594317124627-9e961fc42ec1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                  className="teamy__avatar"
                  alt="Stas Melnikov's photo"
                />
              </div>
              <div className="teamy__back">
                <div className="teamy__back-content">
                  <button
                    className="teamy__open r-button"
                    onclick="openDialog('popup-article', this)"
                  >
                    <span className="button">show more</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroller__item">
          <div
            className="teamy teamy_mask-triangle teamy_zoom-rotate-photo"
            aria-labelledby="person7"
          >
            <div className="teamy__content" id="person7">
              <span className="teamy__name">Lise Laurie</span>
              <span className="teamy__post">Photomodel</span>
            </div>
            <div className="teamy__layout">
              <div className="teamy__front">
                <img
                  src="https://images.unsplash.com/photo-1594441097885-75085c837807?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                  className="teamy__avatar"
                  alt="Lise Laurie's photo"
                />
              </div>
              <div className="teamy__back">
                <div className="teamy__back-content">
                  <button
                    className="teamy__open r-button"
                    onclick="openDialog('popup-article', this)"
                  >
                    <span className="button">show more</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroller__item">
          <div
            className="teamy teamy_mask-triangle teamy_zoom-slide-photo"
            aria-labelledby="person8"
          >
            <div className="teamy__content" id="person8">
              <span className="teamy__name">Effie Eleanora</span>
              <span className="teamy__post">Web-designer</span>
            </div>
            <div className="teamy__layout">
              <div className="teamy__front">
                <img
                  src="https://images.unsplash.com/photo-1568923066121-fb6216cf26f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                  className="teamy__avatar"
                  alt="Effie Eleanora's photo"
                />
              </div>
              <div className="teamy__back">
                <div className="teamy__back-content">
                  <button
                    className="teamy__open r-button"
                    onclick="openDialog('popup-article', this)"
                  >
                    <span className="button">show more</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    id="popup-article"
    role="dialog"
    aria-labelledby="dialog_title"
    aria-modal="true"
  >
    <div className="popup">
      <div className="popup__container">
        <div className="popup__content">
          <h2 id="dialog_title">About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            eaque optio vitae in explicabo recusandae sit id sapiente excepturi
            tempore, nemo, nulla odio deleniti rerum nisi perferendis aut
            molestias! Incidunt nesciunt iusto praesentium! In at maiores
            quibusdam enim quis, quam!
          </p>
          <div className="widget">
            <a
              href="https://cssisntmagic.substack.com/"
              className="r-link"
              target="_top"
            >
              <span className="button">
                Subscribe on my email newsletter with CSS tips
              </span>
            </a>
          </div>
          <p>
            Architecto magni dolores cumque tenetur nemo id aperiam, ratione
            temporibus at, consectetur totam, fuga et illo rerum earum dicta.
            Vitae ullam harum enim aliquid hic commodi voluptas cumque iste ex
            accusantium architecto doloremque reprehenderit, asperiores vero
            dolor, esse inventore dolorem.
          </p>
          <p>
            Excepturi eaque, reprehenderit dolores, cum molestias repellendus in
            expedita. Placeat totam, quos pariatur quidem explicabo id harum ab
            voluptatum. Necessitatibus, aliquam! Dolorum voluptatem ut
            laudantium excepturi cumque, hic iure impedit ullam accusantium
            error natus recusandae, quia fuga quo voluptates officiis?
          </p>
          <p>
            Dignissimos debitis eos necessitatibus accusantium natus voluptates
            illo blanditiis corporis minus. Repudiandae libero quae, illo error
            expedita consectetur possimus voluptate eum esse quam molestiae
            tempore dignissimos ipsam similique ab quod. Ea earum adipisci rem
            voluptatem aliquid voluptatum deleniti necessitatibus provident.
          </p>
          <p>
            Dicta eum amet impedit maiores accusamus numquam saepe
            necessitatibus temporibus ut! Velit ducimus repellendus fuga
            repudiandae culpa voluptatibus delectus praesentium totam odit
            ratione, tenetur assumenda, labore esse et nostrum a, aut veritatis.
            Nihil, voluptas, impedit? Magnam dolorum, iure repellendus vitae.
          </p>
          <p>
            Temporibus voluptatum voluptatibus iste, nam atque dignissimos quam
            labore sequi adipisci tempore exercitationem quos, libero,
            reprehenderit facere quasi soluta, itaque at eum cum possimus!
            Facilis, tempora soluta at quis. Nemo expedita voluptate esse nam ex
            odit, sequi eveniet quibusdam, dolores?
          </p>
          <p>
            Praesentium laboriosam iste dolore cumque voluptatibus deleniti
            quia, delectus provident, illum aperiam, atque molestiae. Cum
            delectus, doloribus expedita eius veritatis assumenda deleniti
            veniam reprehenderit animi ut, eaque asperiores, dicta incidunt
            omnis repellendus dolorum enim inventore rerum voluptatem saepe
            error id.
          </p>
        </div>
        <button
          type="button"
          className="r-button popup__close"
          onclick="closeDialog(this)"
        >
          <span className="popup__close-text">close</span>
        </button>
      </div>
    </div>
  </div>
</>

  )
}
