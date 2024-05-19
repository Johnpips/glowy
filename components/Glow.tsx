import { FC } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import dynamic from "next/dynamic";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export const Glow: FC = () => {
  return (
    <div className={styles.game1}>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.groupParent}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupContainer}>
              <div className={styles.groupContainer}>
                <div className={styles.homeRewardsTaskContainer}>
                  <p className={styles.homeRewards}>{`Home
                                                        Rewards`}</p>
                  <p className={styles.homeRewards}>Task</p>
                  <p className={styles.homeRewards}>Games</p>
                </div>
                <div className={styles.groupDiv}>
                  <img className={styles.groupChild} alt="" src="Group 5.svg" />
                  <img className={styles.groupItem} alt="" src="Group 10.svg" />
                </div>
                <div className={styles.aboutUs}>About us</div>
                <div className={styles.glowgamesappcomParent}>
                  <div className={styles.glowgamesappcom}>
                    glowgames.app.com
                  </div>
                  <div className={styles.aboutUs}>Contact us</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.groupInner} />
          <div className={styles.copyright2024}>
            Copyright ® 2024 glowgames All rights Rcerved
          </div>
        </div>
        <div className={styles.logo}>
          <div className={styles.glow}>GLOW</div>
          <div className={styles.games1}>GAMES</div>
        </div>
      </div>
      <img className={styles.vectorIcon} alt="" src="Vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="VECTOR.svg" />
      <div className={styles.page6}>
        <div className={styles.playGlobalyWithFriendsParent}>
          <b className={styles.playGlobalyWith}>PLAY GLOBALY WITH FRIENDS</b>
          <div className={styles.connectWithFriends}>
            Connect with friends, play with real time human to earn rewards
          </div>
        </div>
        <img className={styles.page6Child} alt="" src="Rectangle 15.png" />
        <img className={styles.page6Item} alt="" src="Rectangle 16.png" />
        <img className={styles.page6Inner} alt="" src="Rectangle 17.png" />
        <img className={styles.rectangleIcon} alt="" src="Rectangle 18.png" />
        <img className={styles.page6Child1} alt="" src="Rectangle 20.png" />
        <img className={styles.page6Child2} alt="" src="Rectangle 19.png" />
        <div className={styles.map}>
          <img className={styles.hugeGlobalIcon} alt="" src="Huge Global.svg" />
        </div>
      </div>
      <div className={styles.page5}>
        <img className={styles.page5Child} alt="" src="Group 1304.svg" />
        <div className={styles.gameplayWrapper}>
          <div className={styles.gameplay}>GAMEPLAY</div>
        </div>
      </div>
      <div className={styles.page4}>
        <div className={styles.page4Inner}>
          <div className={styles.page4Inner}>
            <div className={styles.aboutGlowgamesWrapper}>
              <div className={styles.aboutGlowgames}>About Glowgames</div>
            </div>
            <img
              className={styles.dRenderingCardGame1Icon}
              alt=""
              src="3d-rendering-card-game 1.png"
            />
            <div className={styles.inTheVastContainer}>
              <p className={styles.homeRewards}>
                In the vast expanse of Solanas gaming cosmos, a new star is
                about to emerge: Glowgames, the latest venture in the realm of
                online poker. With a commitment to innovation, excitement, and
                the limitless possibilities of blockchain technology, Glowgames
                is set to revolutionize the way players experience the thrill of
                the cards.
              </p>
              <p className={styles.homeRewards}>
                Led by a team of visionaries, technologists, and poker
                aficionados, Glowgames is more than just a gaming platform—its a
                gateway to a universe of endless entertainment. By harnessing
                the power of Solanas lightning-fast blockchain, Glowgames offers
                players an unparalleled level of speed, security, and
                transparency, ensuring that every hand is dealt fairly and every
                win is celebrated in style.
              </p>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangleDiv} />
              <div className={styles.readMore}>Read more</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.page3}>
        <b className={styles.currentTask}>CURRENT TASK</b>
        <div className={styles.long}>
          <div className={styles.longChild} />
          <div className={styles.connectSolanaWallet}>
            Connect Solana Wallet
          </div>
        </div>
        <div className={styles.long1}>
          <div className={styles.longChild} />
          <div className={styles.connectSolanaWallet}>Connect X</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.longChild} />
          <div className={styles.followGlowgamesOn}>Follow Glowgames on X</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.longChild} />
          <div className={styles.completeZealyTask}>Complete Zealy Task</div>
        </div>
        <div className={styles.short}>
          <div className={styles.pts}>5,000 PTS</div>
          <img className={styles.fire1Icon} alt="" src="fire 1.svg" />
        </div>
        <div className={styles.short1}>
          <div className={styles.pts}>2,000 PTS</div>
          <img className={styles.fire1Icon} alt="" src="fire 1.svg" />
        </div>
        <div className={styles.ptsParent}>
          <div className={styles.pts}>15,000 PTS</div>
          <img className={styles.fire1Icon} alt="" src="fire 1.svg" />
        </div>
        <div className={styles.ptsGroup}>
          <div className={styles.pts}>150,000 PTS</div>
          <img className={styles.fire1Icon} alt="" src="fire 1.svg" />
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild3} />
          <div className={styles.points}>POINTS</div>
        </div>
      </div>
      <div className={styles.page2}>
        <div className={styles.glowgames}>glowgames</div>
        <div className={styles.frameDiv}>
          <img className={styles.frameChild} alt="" src="Group 14.svg" />
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild4} />
            <img
              className={styles.threeDimensionalCasinoItemIcon}
              alt=""
              src="three-dimensional-casino-item (1) 1.png"
            />
            <div className={styles.texasHoldEm}>TEXAS HOLD ‘EM</div>
            <div className={styles.rectangleParent3}>
              <div className={styles.groupChild5} />
              <div className={styles.playNow}>PLAY NOW</div>
            </div>
            <div className={styles.icons8EpicGames2}>
              <img className={styles.vectorIcon2} alt="" src="Vector.svg" />
              <img className={styles.vectorIcon3} alt="" src="Vector.svg" />
              <img className={styles.vectorIcon4} alt="" src="Vector.svg" />
              <img className={styles.vectorIcon5} alt="" src="Vector.svg" />
              <img className={styles.vectorIcon6} alt="" src="Vector.svg" />
              <img className={styles.vectorIcon7} alt="" src="Vector.svg" />
              <div className={styles.glow1}>GLOW</div>
              <img className={styles.groupIcon} alt="" src="Group.svg" />
              <img className={styles.groupIcon1} alt="" src="Group.svg" />
              <img className={styles.groupIcon2} alt="" src="Group.svg" />
            </div>
          </div>
          <div className={styles.rectangleParent4}>
            <div className={styles.groupChild6} />
            <img
              className={styles.threeDimensionalCasinoItemIcon1}
              alt=""
              src="three-dimensional-casino-item 1.png"
            />
            <img
              className={styles.fortniteSkinPngHd1Icon}
              alt=""
              src="Fortnite-Skin-PNG-HD 1.png"
            />
            <div className={styles.icons8EpicGames1}>
              <img className={styles.vectorIcon2} alt="" src="Vector.svg" />
              <img className={styles.vectorIcon3} alt="" src="Vector.svg" />
              <img className={styles.vectorIcon4} alt="" src="Vector.svg" />
              <img className={styles.vectorIcon5} alt="" src="Vector.svg" />
              <img className={styles.vectorIcon6} alt="" src="Vector.svg" />
              <img className={styles.vectorIcon7} alt="" src="Vector.svg" />
              <div className={styles.glow1}>GLOW</div>
              <img className={styles.groupIcon} alt="" src="Group.svg" />
              <img className={styles.groupIcon1} alt="" src="Group.svg" />
              <img className={styles.groupIcon2} alt="" src="Group.svg" />
            </div>
            <div className={styles.chinesePoker}>CHINESE POKER</div>
            <div className={styles.rectangleParent5}>
              <div className={styles.groupChild7} />
              <div className={styles.playNow}>PLAY NOW</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.page1}>
        <div className={styles.homeTxt}>
          <div className={styles.groupParent2}>
            <div className={styles.rectangleParent6}>
              <div className={styles.wrap}>
                <WalletMultiButtonDynamic className={styles.solwal} />
              </div>
              <img className={styles.icon} alt="" src="11 1.png" />
            </div>
            <div className={styles.solanaGamingSolutionForAllParent}>
              <b className={styles.solanaGamingSolutionContainer}>
                <p className={styles.homeRewards}>
                  Solana Gaming Solution for all poker
                </p>
                <p className={styles.homeRewards}>games</p>
              </b>
              <b className={styles.poweredBySolanaContainer}>
                <span className={styles.poweredBy}>{`Powered  by `}</span>
                <span className={styles.solana}>Solana</span>
              </b>
            </div>
            <div
              className={styles.experienceGamingIn}
            >{`Experience gaming in a new world of gamers, introducing poker games with rewards......   `}</div>
          </div>
        </div>
        <div className={styles.page1Inner}>
          <div className={styles.icons8HomePage1Parent}>
            <img
              className={styles.icons8HomePage1}
              alt=""
              src="icons8_home_page 1.svg"
            />
            <img
              className={styles.icons8HomePage1}
              alt=""
              src="icons8_game_controller 1.svg"
            />
            <img
              className={styles.icons8HomePage1}
              alt=""
              src="icons8_user_male 1.svg"
            />
            <img
              className={styles.icons8HomePage1}
              alt=""
              src="icons8_settings 1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.glowGames}>glow games</div>
      <div className={styles.game1Inner}>
        <div className={styles.partnersParent}>
          <div className={styles.partners}>PARTNERS</div>
          <div className={styles.ellipseParent}>
            <img className={styles.ellipseIcon} alt="" src="Ellipse 175.png" />
            <div className={styles.solana1}>Solana</div>
          </div>
          <div className={styles.ellipseGroup}>
            <img className={styles.ellipseIcon} alt="" src="Ellipse 175.png" />
            <div className={styles.fifthofficial}>Fifthofficial</div>
          </div>
          <div className={styles.ellipseContainer}>
            <img className={styles.ellipseIcon} alt="" src="Ellipse 175.png" />
            <div className={styles.haoranGames}>Haoran Games</div>
          </div>
          <img
            className={styles.buttonnonactleftIcon}
            alt=""
            src="Button/nonact/left.svg"
          />
          <img
            className={styles.buttonactrightIcon}
            alt=""
            src="Button/act/right.svg"
          />
        </div>
      </div>
      <div className={styles.ellipseParent1}>
        <div className={styles.ellipseDiv} />
        <div className={styles.groupChild11} />
        <div className={styles.groupChild12} />
        <img className={styles.unionIcon} alt="" src="Union.svg" />
      </div>
    </div>
  );
};
