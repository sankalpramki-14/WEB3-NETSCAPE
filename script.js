/* =========================================================
   NETSCAPE
   Interactive Web3 Experience
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const body = document.body;

    const conceptOverlay =
        document.getElementById("conceptOverlay");

    const conceptExperience =
        document.getElementById("conceptExperience");

    const conceptGrid =
        document.getElementById("conceptGrid");

    const conceptClose =
        document.getElementById("conceptClose");

    const conceptPrevious =
        document.getElementById("conceptPrevious");

    const conceptNextModal =
        document.getElementById("conceptNextModal");

    const conceptCurrentNumber =
        document.getElementById("conceptCurrentNumber");

    const conceptModalEyebrow =
        document.getElementById("conceptModalEyebrow");

    const conceptModalTitle =
        document.getElementById("conceptModalTitle");

    const conceptModalSubtitle =
        document.getElementById("conceptModalSubtitle");

    const conceptNexoMessage =
        document.getElementById("conceptNexoMessage");

    const conceptMetrics =
        document.getElementById("conceptMetrics");

    const metricOne =
        document.getElementById("metricOne");

    const metricTwo =
        document.getElementById("metricTwo");

    const metricThree =
        document.getElementById("metricThree");

    const metricFour =
        document.getElementById("metricFour");

    const conceptWhat =
        document.getElementById("conceptWhat");

    const conceptHow =
        document.getElementById("conceptHow");

    const conceptWhy =
        document.getElementById("conceptWhy");

    const conceptReality =
        document.getElementById("conceptReality");

    const conceptFlow =
        document.getElementById("conceptFlow");

    const conceptDynamicVisual =
        document.getElementById("conceptDynamicVisual");

    const visualPanelStatus =
        document.getElementById("visualPanelStatus");

    const interactionTitle =
        document.getElementById("interactionTitle");

    const conceptInteractionContent =
        document.getElementById(
            "conceptInteractionContent"
        );

    const previousConceptName =
        document.getElementById("previousConceptName");

    const nextConceptName =
        document.getElementById("nextConceptName");

    const experienceProgress =
        document.getElementById("experienceProgress");

    const paginationDots =
        document.querySelectorAll(
            ".pagination-dot"
        );

    const globalNexo =
        document.getElementById("nexoGlobal");

    const globalNexoMessage =
        document.querySelector(
            ".nexo-global-message p"
        );


    /* =====================================================
       CONCEPT DATA
    ====================================================== */

    const concepts = {

        blockchain: {

            number: "01",

            label: "THE SHARED RECORD",

            title: "BLOCKCHAIN",

            subtitle:
                "A shared record beneath the network.",

            nexo:
                "Let's start with the thing everything else is built on.",

            metrics: [
                "SHARED STATE",
                "BLOCKS",
                "DISTRIBUTED",
                "VERIFY"
            ],

            what:
                "A blockchain is a shared database or ledger maintained across a network. Instead of one organization owning the only copy, participating computers maintain and verify the network's state according to its rules.",

            how:
                "A transaction is broadcast to the network. Valid transactions are processed into blocks, and the network's consensus mechanism determines which state becomes part of the accepted chain.",

            why:
                "The important idea is shared verification. Participants can independently inspect the history and agree on the current state without relying entirely on one central database.",

            reality:
                "Blockchain is not automatically better than a normal database. It can introduce extra complexity, cost and performance tradeoffs. It is useful when shared verification, programmable ownership or reduced dependence on a single operator matter.",

            flow: [
                "TRANSACTION",
                "BROADCAST",
                "VALIDATE",
                "BLOCK",
                "CONSENSUS",
                "CHAIN"
            ]

        },


        contracts: {

            number: "02",

            label: "PROGRAMMABLE RULES",

            title: "SMART CONTRACTS",

            subtitle:
                "Code that can execute rules on a blockchain.",

            nexo:
                "Smart doesn't mean intelligent. It means programmable.",

            metrics: [
                "PROGRAM",
                "FUNCTIONS",
                "STATE",
                "GAS"
            ],

            what:
                "A smart contract is a program deployed to a blockchain address. It contains functions and rules that can be executed when users or other contracts interact with it.",

            how:
                "A user signs a transaction with their wallet. The network processes that request, the contract executes its programmed logic, and the blockchain records any resulting state changes.",

            why:
                "Smart contracts make blockchains programmable. They can power token transfers, NFT systems, exchanges, games, lending systems, governance and decentralized applications.",

            reality:
                "Smart contracts are deterministic programs, not artificial intelligence. They also cannot automatically know what happened outside the blockchain. External information often requires an oracle or another data mechanism.",

            flow: [
                "WALLET",
                "SIGN",
                "CONTRACT",
                "EXECUTE",
                "STATE CHANGE"
            ]

        },


        crypto: {

            number: "03",

            label: "DIGITAL VALUE",

            title: "CRYPTOCURRENCY",

            subtitle:
                "Digital value that can move across blockchain networks.",

            nexo:
                "Now let's follow something people actually want to move: value.",

            metrics: [
                "DIGITAL",
                "ASSET",
                "TRANSFER",
                "NETWORK"
            ],

            what:
                "Cryptocurrency is digital value that can be transferred using cryptographic systems and blockchain networks. Bitcoin was the first widely recognized cryptocurrency. Ethereum introduced ETH as the native asset of the Ethereum network.",

            how:
                "A sender creates and signs a transaction. The network processes it according to its rules, and the resulting change in balances or ownership becomes part of the blockchain's shared state.",

            why:
                "Blockchain networks make it possible to transfer digital value between addresses without requiring every transfer to be settled by one central database.",

            reality:
                "Crypto is not free money. Assets can be volatile, transactions can involve fees, and losing control of private keys can mean losing access to assets. Different networks also have different security and design tradeoffs.",

            flow: [
                "ALICE",
                "TRANSACTION",
                "NETWORK",
                "BLOCKCHAIN",
                "BOB"
            ]

        },


        nft: {

            number: "04",

            label: "UNIQUE DIGITAL ASSETS",

            title: "NFTs",

            subtitle:
                "Tokens designed to represent something unique.",

            nexo:
                "A token doesn't have to represent money. Sometimes it represents something unique.",

            metrics: [
                "TOKEN ID",
                "OWNER",
                "METADATA",
                "UNIQUE"
            ],

            what:
                "An NFT, or non-fungible token, is a blockchain token designed to be distinguishable from another token. A token ID and its contract help identify a specific asset on a network.",

            how:
                "A creator can interact with an NFT smart contract to mint a token. The blockchain records the token's ownership and identifying information, while additional metadata can describe the asset.",

            why:
                "NFTs can represent digital collectibles, tickets, game assets, memberships, certificates, art and other unique digital or tokenized items.",

            reality:
                "Owning an NFT does not automatically mean owning copyright to the artwork or media associated with it. The rights attached to an NFT depend on its specific terms and system.",

            flow: [
                "CREATOR",
                "MINT",
                "TOKEN ID",
                "WALLET",
                "OWNERSHIP"
            ]

        },


        dao: {

            number: "05",

            label: "COMMUNITY GOVERNANCE",

            title: "DAOs",

            subtitle:
                "Communities coordinating around shared rules and resources.",

            nexo:
                "What happens when the community becomes part of the system?",

            metrics: [
                "PROPOSALS",
                "VOTING",
                "TREASURY",
                "COMMUNITY"
            ],

            what:
                "A DAO, or decentralized autonomous organization, is a community structure that uses blockchain-based tools to coordinate proposals, voting, membership and sometimes shared financial resources.",

            how:
                "Members can submit proposals. Depending on the DAO's design, eligible members vote, a quorum may be required, and approved decisions can trigger further actions through connected systems.",

            why:
                "DAOs experiment with ways for online communities to coordinate around shared resources, projects, protocols and decisions without relying entirely on a conventional centralized organization.",

            reality:
                "A DAO does not automatically make governance fair or decentralized. Voting power can become concentrated, participation can be uneven, and governance rules themselves need careful design.",

            flow: [
                "COMMUNITY",
                "PROPOSAL",
                "DISCUSSION",
                "VOTE",
                "RESULT",
                "EXECUTE"
            ]

        },


        wallet: {

            number: "06",

            label: "YOUR NETWORK GATEWAY",

            title: "WALLETS",

            subtitle:
                "Interfaces for keys, signatures and blockchain interactions.",

            nexo:
                "A wallet isn't a bag of coins. It's your interface to the network.",

            metrics: [
                "ADDRESS",
                "PRIVATE KEY",
                "SIGN",
                "DAPP"
            ],

            what:
                "A crypto wallet is an interface that helps users manage blockchain accounts and cryptographic keys. It can display addresses, sign transactions and connect users to blockchain applications.",

            how:
                "A wallet can generate or manage keys, provide a public address for receiving assets, and create cryptographic signatures that authorize transactions or messages.",

            why:
                "Wallets are a major gateway into Web3. They let users connect to decentralized applications, interact with smart contracts and control blockchain accounts.",

            reality:
                "A wallet does not literally contain coins sitting inside it. Blockchain assets are recorded on the network. The wallet manages keys that can authorize actions involving those assets.",

            flow: [
                "WALLET",
                "ADDRESS",
                "SIGN",
                "NETWORK",
                "DAPP"
            ]

        }

    };


    /* =====================================================
       CONCEPT ORDER
    ====================================================== */

    const conceptOrder = [
        "blockchain",
        "contracts",
        "crypto",
        "nft",
        "dao",
        "wallet"
    ];

    let currentConceptIndex = 0;

    let isDragging = false;
    let dragStartX = 0;
    let dragScrollLeft = 0;


    /* =====================================================
       UTILITY
    ====================================================== */

    function getConcept(key) {
        return concepts[key];
    }

    function getCurrentConcept() {
        return concepts[
            conceptOrder[currentConceptIndex]
        ];
    }

    function getConceptIndex(key) {
        return conceptOrder.indexOf(key);
    }


    /* =====================================================
       OPEN CONCEPT
    ====================================================== */

    function openConcept(key) {

        const index = getConceptIndex(key);

        if (index === -1) {
            return;
        }

        currentConceptIndex = index;

        renderConcept();

        conceptOverlay.classList.add("open");

        conceptOverlay.setAttribute(
            "aria-hidden",
            "false"
        );

        body.classList.add("modal-open");

        conceptExperience.scrollTop = 0;

        setTimeout(() => {

            conceptClose.focus();

        }, 150);

    }


    /* =====================================================
       CLOSE CONCEPT
    ====================================================== */

    function closeConcept() {

        conceptOverlay.classList.remove("open");

        conceptOverlay.setAttribute(
            "aria-hidden",
            "true"
        );

        body.classList.remove("modal-open");

    }


    /* =====================================================
       RENDER CONCEPT
    ====================================================== */

    function renderConcept() {

        const key =
            conceptOrder[currentConceptIndex];

        const concept =
            getCurrentConcept();

        if (!concept) {
            return;
        }


        /* ---------------------------------------------
           Main information
        --------------------------------------------- */

        conceptCurrentNumber.textContent =
            concept.number;

        conceptModalEyebrow.textContent =
            concept.label;

        conceptModalTitle.textContent =
            concept.title;

        conceptModalSubtitle.textContent =
            concept.subtitle;

        conceptNexoMessage.textContent =
            concept.nexo;

        conceptWhat.textContent =
            concept.what;

        conceptHow.textContent =
            concept.how;

        conceptWhy.textContent =
            concept.why;

        conceptReality.textContent =
            concept.reality;


        /* ---------------------------------------------
           Metrics
        --------------------------------------------- */

        metricOne.textContent =
            concept.metrics[0];

        metricTwo.textContent =
            concept.metrics[1];

        metricThree.textContent =
            concept.metrics[2];

        metricFour.textContent =
            concept.metrics[3];


        /* ---------------------------------------------
           Flow
        --------------------------------------------- */

        conceptFlow.innerHTML =
            concept.flow
                .map((step, index) => {

                    const arrow =
                        index <
                        concept.flow.length - 1
                            ? "<i>→</i>"
                            : "";

                    return `
                        <span>${step}</span>
                        ${arrow}
                    `;

                })
                .join("");


        /* ---------------------------------------------
           Navigation names
        --------------------------------------------- */

        const previousIndex =
            (
                currentConceptIndex -
                1 +
                conceptOrder.length
            ) %
            conceptOrder.length;

        const nextIndex =
            (
                currentConceptIndex +
                1
            ) %
            conceptOrder.length;

        previousConceptName.textContent =
            concepts[
                conceptOrder[previousIndex]
            ].title;

        nextConceptName.textContent =
            concepts[
                conceptOrder[nextIndex]
            ].title;


        /* ---------------------------------------------
           Progress
        --------------------------------------------- */

        const progressItems =
            experienceProgress.querySelectorAll(
                "span"
            );

        progressItems.forEach(
            (item, index) => {

                item.classList.toggle(
                    "progress-active",
                    index === currentConceptIndex
                );

            }
        );


        /* ---------------------------------------------
           Card selection
        --------------------------------------------- */

        document
            .querySelectorAll(".concept-card")
            .forEach(card => {

                card.classList.toggle(
                    "selected",
                    card.dataset.concept === key
                );

            });


        /* ---------------------------------------------
           Visual
        --------------------------------------------- */

        renderConceptVisual(key);

        renderConceptInteraction(key);


        /* ---------------------------------------------
           Status
        --------------------------------------------- */

        visualPanelStatus.textContent =
            "READY";

    }


    /* =====================================================
       CONCEPT VISUALS
    ====================================================== */

    function renderConceptVisual(key) {

        if (key === "blockchain") {

            conceptDynamicVisual.innerHTML = `

                <div class="dynamic-chain">

                    <span class="dynamic-chain-title">
                        DISTRIBUTED LEDGER
                    </span>

                    <div
                        class="dynamic-chain-track"
                        id="dynamicChainTrack"
                    >

                        <div class="dynamic-block">
                            <span>BLOCK 001</span>
                            <strong>GENESIS</strong>
                            <code>0xA91</code>
                        </div>

                        <div class="dynamic-block-arrow">
                            →
                        </div>

                        <div class="dynamic-block">
                            <span>BLOCK 002</span>
                            <strong>TRANSACTION</strong>
                            <code>0xB72</code>
                        </div>

                        <div class="dynamic-block-arrow">
                            →
                        </div>

                        <div class="dynamic-block">
                            <span>BLOCK 003</span>
                            <strong>TRANSACTION</strong>
                            <code>0xC43</code>
                        </div>

                    </div>

                    <button
                        class="btn btn-primary"
                        id="dynamicAddBlock"
                        type="button"
                    >
                        ADD BLOCK
                    </button>

                </div>

            `;

            return;
        }


        if (key === "contracts") {

            conceptDynamicVisual.innerHTML = `

                <div class="contract-experience">

                    <div class="contract-state">

                        <div class="contract-state-box">

                            <span>INPUT</span>

                            <strong>
                                TOKEN OWNED
                            </strong>

                        </div>

                        <div class="contract-state-box">

                            <span>RULE</span>

                            <strong>
                                IF / THEN
                            </strong>

                        </div>

                        <div class="contract-state-box">

                            <span>OUTPUT</span>

                            <strong>
                                ACCESS
                            </strong>

                        </div>

                    </div>

                    <div class="contract-execution">

                        <p>
                            CONTRACT CONDITION
                        </p>

                        <strong>
                            IF USER OWNS TOKEN
                            <br>
                            THEN ACCESS GRANTED
                        </strong>

                        <button
                            class="btn btn-secondary contract-execute-button"
                            id="dynamicContractExecute"
                            type="button"
                        >
                            EXECUTE
                        </button>

                        <div
                            id="dynamicContractResult"
                            class="contract-result"
                        >
                            WAITING...
                        </div>

                    </div>

                </div>

            `;

            return;
        }


        if (key === "crypto") {

            conceptDynamicVisual.innerHTML = `

                <div class="crypto-experience">

                    <div class="value-transfer">

                        <div class="value-node">

                            <span>
                                SENDER
                            </span>

                            <strong>
                                ALICE
                            </strong>

                            <div class="value-address">
                                0xA91...21
                            </div>

                        </div>

                        <div class="value-transfer-arrow">
                            →
                        </div>

                        <div class="value-node">

                            <span>
                                RECEIVER
                            </span>

                            <strong>
                                BOB
                            </strong>

                            <div class="value-address">
                                0xB72...84
                            </div>

                        </div>

                    </div>

                    <div class="value-token">
                        ₿
                    </div>

                </div>

            `;

            return;
        }


        if (key === "nft") {

            conceptDynamicVisual.innerHTML = `

                <div class="nft-experience">

                    <div class="nft-big-art">

                        <div class="nft-big-art-inner">
                            ◈
                        </div>

                    </div>

                    <div class="nft-details">

                        <h3>
                            NETWORK RELIC
                        </h3>

                        <div class="nft-detail-row">
                            <span>TOKEN ID</span>
                            <strong>#017</strong>
                        </div>

                        <div class="nft-detail-row">
                            <span>CONTRACT</span>
                            <strong>0x7A...91</strong>
                        </div>

                        <div class="nft-detail-row">
                            <span>OWNER</span>
                            <strong>0x8A...42</strong>
                        </div>

                        <div class="nft-detail-row">
                            <span>RARITY</span>
                            <strong>RARE</strong>
                        </div>

                        <button
                            class="btn btn-primary"
                            id="discoverNFT"
                            type="button"
                            style="margin-top: 1rem;"
                        >
                            DISCOVER
                        </button>

                    </div>

                </div>

            `;

            return;
        }


        if (key === "dao") {

            conceptDynamicVisual.innerHTML = `

                <div class="dao-experience">

                    <div class="dao-dashboard">

                        <div class="dao-stat">
                            <span>TREASURY</span>
                            <strong>12.84 ETH</strong>
                        </div>

                        <div class="dao-stat">
                            <span>MEMBERS</span>
                            <strong>2,481</strong>
                        </div>

                        <div class="dao-stat">
                            <span>PROPOSALS</span>
                            <strong>03</strong>
                        </div>

                    </div>

                    <div class="dao-proposal">

                        <small>
                            SIMULATED PROPOSAL #017
                        </small>

                        <h3>
                            Allocate resources to an
                            open-source Web3 education project.
                        </h3>

                        <div class="dao-votes">

                            <div class="vote-bar">

                                <div
                                    class="vote-yes"
                                    id="daoVoteYes"
                                ></div>

                                <div class="vote-no"></div>

                            </div>

                            <div class="vote-labels">

                                <span id="daoYesLabel">
                                    YES 68%
                                </span>

                                <span id="daoNoLabel">
                                    NO 32%
                                </span>

                            </div>

                        </div>

                        <div class="dao-vote-buttons">

                            <button
                                id="daoVoteYesButton"
                                type="button"
                            >
                                VOTE YES
                            </button>

                            <button
                                id="daoVoteNoButton"
                                type="button"
                            >
                                VOTE NO
                            </button>

                        </div>

                    </div>

                </div>

            `;

            return;
        }


        if (key === "wallet") {

            conceptDynamicVisual.innerHTML = `

                <div class="wallet-experience">

                    <div class="wallet-identity-card">

                        <span class="wallet-address">
                            PUBLIC ADDRESS
                        </span>

                        <strong class="wallet-address">
                            0x8A71...A942
                        </strong>

                    </div>

                    <div class="wallet-permissions">

                        <div class="wallet-permission">

                            <span>
                                01
                            </span>

                            <strong>
                                RECEIVE
                            </strong>

                        </div>

                        <div class="wallet-permission">

                            <span>
                                02
                            </span>

                            <strong>
                                SIGN
                            </strong>

                        </div>

                        <div class="wallet-permission">

                            <span>
                                03
                            </span>

                            <strong>
                                CONNECT
                            </strong>

                        </div>

                    </div>

                    <div class="wallet-connect-experience">

                        <span>
                            SIMULATED WALLET
                        </span>

                        <button
                            class="btn btn-primary"
                            id="dynamicWalletConnect"
                            type="button"
                        >
                            CONNECT
                        </button>

                    </div>

                </div>

            `;

        }

    }


    /* =====================================================
       CONCEPT INTERACTIONS
    ====================================================== */

    function renderConceptInteraction(key) {

        if (key === "blockchain") {

            interactionTitle.textContent =
                "WATCH A BLOCK ENTER THE CHAIN";

            conceptInteractionContent.innerHTML = `

                <p>
                    Add a new block and watch the chain
                    extend while its hash becomes part of
                    the next link.
                </p>

            `;

            return;
        }


        if (key === "contracts") {

            interactionTitle.textContent =
                "EXECUTE THE RULE";

            conceptInteractionContent.innerHTML = `

                <p>
                    Trigger the simulated contract and
                    see the rule evaluate.
                </p>

            `;

            return;
        }


        if (key === "crypto") {

            interactionTitle.textContent =
                "FOLLOW DIGITAL VALUE";

            conceptInteractionContent.innerHTML = `

                <p>
                    The token above represents a simplified
                    value transfer from one blockchain address
                    to another.
                </p>

                <button
                    class="concept-value-burst"
                    id="cryptoValueBurstButton"
                    type="button"
                >
                    <span>◎</span>
                    OPEN DIGITAL VALUE LAB
                    <strong>→</strong>
                </button>

            `;


            const cryptoValueBurstButton =
                document.getElementById(
                    "cryptoValueBurstButton"
                );


            if (cryptoValueBurstButton) {

                cryptoValueBurstButton.addEventListener(
                    "click",
                    () => {

                        openValueBurst();

                    }
                );

            }


            return;
        }


        if (key === "nft") {

            interactionTitle.textContent =
                "INSPECT THE TOKEN";

            conceptInteractionContent.innerHTML = `

                <p>
                    An NFT can have a token ID, contract,
                    owner and metadata associated with it.
                    Discover the hidden Network Relic to
                    unlock the first secret.
                </p>

            `;

            return;
        }


        if (key === "dao") {

            interactionTitle.textContent =
                "MAKE A GOVERNANCE CHOICE";

            conceptInteractionContent.innerHTML = `

                <p>
                    This is a simulated DAO proposal.
                    Your vote changes the demonstration only,
                    not a real blockchain or treasury.
                </p>

            `;

            return;
        }


        if (key === "wallet") {

            interactionTitle.textContent =
                "CONNECT YOUR NETWORK IDENTITY";

            conceptInteractionContent.innerHTML = `

                <p>
                    Connect the simulated wallet to transform
                    the Network Passport from EXPLORING to
                    CONNECTED.
                </p>

            `;

        }

    }


    /* =====================================================
       CONCEPT CARD CLICK
    ====================================================== */

    if (conceptGrid) {

        conceptGrid.addEventListener(
            "click",
            event => {

                const button =
                    event.target.closest(
                        ".concept-explore"
                    );

                const card =
                    event.target.closest(
                        ".concept-card"
                    );

                const key =
                    button?.dataset.concept ||
                    card?.dataset.concept;

                if (!key) {
                    return;
                }

                openConcept(key);

            }
        );

    }


    /* =====================================================
       CONCEPT NAVIGATION
    ====================================================== */

    function goToPreviousConcept() {

        currentConceptIndex =
            (
                currentConceptIndex -
                1 +
                conceptOrder.length
            ) %
            conceptOrder.length;

        renderConcept();

        if (conceptExperience) {

            conceptExperience.scrollTop =
                0;

        }

    }


    function goToNextConcept() {

        currentConceptIndex =
            (
                currentConceptIndex +
                1
            ) %
            conceptOrder.length;

        renderConcept();

        if (conceptExperience) {

            conceptExperience.scrollTop =
                0;

        }

    }


    if (conceptPrevious) {

        conceptPrevious.addEventListener(
            "click",
            goToPreviousConcept
        );

    }


    if (conceptNextModal) {

        conceptNextModal.addEventListener(
            "click",
            goToNextConcept
        );

    }


    /* =====================================================
       CLOSE CONCEPT
    ====================================================== */

    if (conceptClose) {

        conceptClose.addEventListener(
            "click",
            closeConcept
        );

    }


    document.addEventListener(
        "click",
        event => {

            if (
                event.target.matches(
                    "[data-close-concept]"
                )
            ) {

                closeConcept();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                !conceptOverlay.classList.contains(
                    "open"
                )
            ) {
                return;
            }

            if (event.key === "Escape") {
                closeConcept();
            }

            if (event.key === "ArrowLeft") {
                goToPreviousConcept();
            }

            if (event.key === "ArrowRight") {
                goToNextConcept();
            }

        }
    );


    /* =====================================================
       CAROUSEL
    ====================================================== */

    const conceptPrev =
        document.getElementById(
            "conceptPrev"
        );

    const conceptNext =
        document.getElementById(
            "conceptNext"
        );


    function updatePagination() {

        if (!conceptGrid) {
            return;
        }

        const cards =
            conceptGrid.querySelectorAll(
                ".concept-card"
            );

        if (!cards.length) {
            return;
        }

        const scrollPosition =
            conceptGrid.scrollLeft;

        const width =
            cards[0].offsetWidth +
            16;

        const index =
            Math.round(
                scrollPosition / width
            );

        paginationDots.forEach(
            (dot, dotIndex) => {

                dot.classList.toggle(
                    "active",
                    dotIndex ===
                    Math.min(
                        index,
                        paginationDots.length - 1
                    )
                );

            }
        );

    }


    function scrollCarousel(direction) {

        if (!conceptGrid) {
            return;
        }

        const amount =
            Math.min(
                conceptGrid.clientWidth * 0.78,
                450
            );

        conceptGrid.scrollBy({

            left:
                direction === "next"
                    ? amount
                    : -amount,

            behavior: "smooth"

        });

    }


    if (conceptPrev) {

        conceptPrev.addEventListener(
            "click",
            () => scrollCarousel("previous")
        );

    }


    if (conceptNext) {

        conceptNext.addEventListener(
            "click",
            () => scrollCarousel("next")
        );

    }


    if (conceptGrid) {

        conceptGrid.addEventListener(
            "scroll",
            updatePagination,
            {
                passive: true
            }
        );

    }


    /* =====================================================
       DRAG TO SCROLL
    ====================================================== */

    if (conceptGrid) {

        conceptGrid.addEventListener(
            "mousedown",
            event => {

                isDragging = true;

                conceptGrid.classList.add(
                    "dragging"
                );

                dragStartX =
                    event.pageX -
                    conceptGrid.offsetLeft;

                dragScrollLeft =
                    conceptGrid.scrollLeft;

            }
        );


        conceptGrid.addEventListener(
            "mouseleave",
            () => {

                isDragging = false;

                conceptGrid.classList.remove(
                    "dragging"
                );

            }
        );


        conceptGrid.addEventListener(
            "mouseup",
            () => {

                isDragging = false;

                conceptGrid.classList.remove(
                    "dragging"
                );

            }
        );


        conceptGrid.addEventListener(
            "mousemove",
            event => {

                if (!isDragging) {
                    return;
                }

                event.preventDefault();

                const x =
                    event.pageX -
                    conceptGrid.offsetLeft;

                const walk =
                    (x - dragStartX) * 1.25;

                conceptGrid.scrollLeft =
                    dragScrollLeft - walk;

            }
        );

    }


    /* =====================================================
       BLOCKCHAIN DYNAMIC INTERACTION
    ====================================================== */

    document.addEventListener(
        "click",
        event => {

            if (
                event.target.id !==
                "dynamicAddBlock"
            ) {
                return;
            }

            const track =
                document.getElementById(
                    "dynamicChainTrack"
                );

            if (!track) {
                return;
            }

            const count =
                track.querySelectorAll(
                    ".dynamic-block"
                ).length + 1;

            const arrow =
                document.createElement(
                    "div"
                );

            arrow.className =
                "dynamic-block-arrow";

            arrow.textContent =
                "→";

            const block =
                document.createElement(
                    "div"
                );

            block.className =
                "dynamic-block new-block";

            block.innerHTML = `
                <span>
                    BLOCK ${String(count).padStart(3, "0")}
                </span>

                <strong>
                    TRANSACTION
                </strong>

                <code>
                    0x${Math.random()
                        .toString(16)
                        .substring(2, 5)
                        .toUpperCase()}
                </code>
            `;

            track.appendChild(arrow);
            track.appendChild(block);

            visualPanelStatus.textContent =
                "BLOCK ADDED";

            setTimeout(() => {

                visualPanelStatus.textContent =
                    "CHAIN VERIFIED";

            }, 1400);

            track.scrollTo({

                left:
                    track.scrollWidth,

                behavior: "smooth"

            });

        }
    );


    /* =====================================================
       SMART CONTRACT DYNAMIC INTERACTION
    ====================================================== */

    document.addEventListener(
        "click",
        event => {

            if (
                event.target.id !==
                "dynamicContractExecute"
            ) {
                return;
            }

            const result =
                document.getElementById(
                    "dynamicContractResult"
                );

            if (!result) {
                return;
            }

            result.textContent =
                "EXECUTING CONTRACT...";

            visualPanelStatus.textContent =
                "PROCESSING";

            setTimeout(() => {

                result.textContent =
                    "✓ CONDITION TRUE • ACCESS GRANTED";

                result.classList.add(
                    "success"
                );

                visualPanelStatus.textContent =
                    "EXECUTED";

            }, 1000);

        }
    );


    /* =====================================================
       DAO VOTING
    ====================================================== */

    document.addEventListener(
        "click",
        event => {

            const yesButton =
                event.target.closest(
                    "#daoVoteYesButton"
                );

            const noButton =
                event.target.closest(
                    "#daoVoteNoButton"
                );

            if (!yesButton && !noButton) {
                return;
            }

            const yesBar =
                document.getElementById(
                    "daoVoteYes"
                );

            const yesLabel =
                document.getElementById(
                    "daoYesLabel"
                );

            const noLabel =
                document.getElementById(
                    "daoNoLabel"
                );

            if (
                !yesBar ||
                !yesLabel ||
                !noLabel
            ) {
                return;
            }

            let yes = 68;

            if (yesButton) {

                yes =
                    Math.min(
                        95,
                        yes + 5
                    );

            }

            if (noButton) {

                yes =
                    Math.max(
                        5,
                        yes - 5
                    );

            }

            const no =
                100 - yes;

            yesBar.style.width =
                `${yes}%`;

            yesLabel.textContent =
                `YES ${yes}%`;

            noLabel.textContent =
                `NO ${no}%`;

            visualPanelStatus.textContent =
                "VOTE RECORDED";

            setTimeout(() => {

                visualPanelStatus.textContent =
                    "SIMULATION";

            }, 1200);

        }
    );


    /* =====================================================
       NFT DISCOVERY
    ====================================================== */

    document.addEventListener(
        "click",
        event => {

            if (
                event.target.id !==
                "discoverNFT"
            ) {
                return;
            }

            const hiddenNFT =
                document.getElementById(
                    "hiddenNFT"
                );

            if (!hiddenNFT) {
                return;
            }

            hiddenNFT.classList.add(
                "open"
            );

            hiddenNFT.setAttribute(
                "aria-hidden",
                "false"
            );

        }
    );


    const closeNFT =
        document.getElementById(
            "closeNFT"
        );


    if (closeNFT) {

        closeNFT.addEventListener(
            "click",
            () => {

                const hiddenNFT =
                    document.getElementById(
                        "hiddenNFT"
                    );

                if (!hiddenNFT) {
                    return;
                }

                hiddenNFT.classList.remove(
                    "open"
                );

                hiddenNFT.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }
        );

    }


    /* =====================================================
       WALLET SIMULATION
    ====================================================== */

    function connectWallet() {

        const passport =
            document.getElementById(
                "networkPassport"
            );

        const walletStatus =
            document.getElementById(
                "walletStatus"
            );

        const passportButton =
            document.getElementById(
                "passportButton"
            );

        const connectButton =
            document.getElementById(
                "connectButton"
            );

        if (passport) {

            passport.classList.add(
                "connected"
            );

        }

        if (walletStatus) {

            walletStatus.textContent =
                "CONNECTED";

        }

        if (passportButton) {

            passportButton.textContent =
                "NETWORK CONNECTED";

        }

        if (connectButton) {

            connectButton.textContent =
                "CONNECTED";

            connectButton.classList.add(
                "connected"
            );

        }

    }


    const passportButton =
        document.getElementById(
            "passportButton"
        );


    if (passportButton) {

        passportButton.addEventListener(
            "click",
            connectWallet
        );

    }


    const connectButton =
        document.getElementById(
            "connectButton"
        );


    if (connectButton) {

        connectButton.addEventListener(
            "click",
            () => {

                connectWallet();

                const passport =
                    document.getElementById(
                        "networkPassport"
                    );

                if (passport) {

                    passport.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }
        );

    }


    /* =====================================================
       DYNAMIC WALLET EXPERIENCE
    ====================================================== */

    document.addEventListener(
        "click",
        event => {

            if (
                event.target.id !==
                "dynamicWalletConnect"
            ) {
                return;
            }

            connectWallet();

            event.target.textContent =
                "CONNECTED";

            event.target.classList.add(
                "connected"
            );

            visualPanelStatus.textContent =
                "CONNECTED";

        }
    );


    /* =====================================================
       TRAILER
    ====================================================== */

    const watchTrailer =
        document.getElementById(
            "watchTrailer"
        );

    const trailerModal =
        document.getElementById(
            "trailerModal"
        );

    const closeTrailer =
        document.getElementById(
            "closeTrailer"
        );

    const trailerVideo =
        document.getElementById(
            "trailerVideo"
        );


    function openTrailer() {

        if (!trailerModal) {
            return;
        }

        trailerModal.classList.add(
            "open"
        );

        trailerModal.setAttribute(
            "aria-hidden",
            "false"
        );

        body.classList.add(
            "modal-open"
        );


        if (trailerVideo) {

            trailerVideo.load();

            const playPromise =
                trailerVideo.play();

            if (
                playPromise &&
                typeof playPromise.catch ===
                "function"
            ) {

                playPromise.catch(() => {

                    trailerVideo.setAttribute(
                        "data-playback-blocked",
                        "true"
                    );

                });

            }

        }

    }


    function closeTrailerModal() {

        if (!trailerModal) {
            return;
        }

        trailerModal.classList.remove(
            "open"
        );

        trailerModal.setAttribute(
            "aria-hidden",
            "true"
        );

        body.classList.remove(
            "modal-open"
        );


        if (trailerVideo) {

            trailerVideo.pause();

            trailerVideo.currentTime =
                0;

        }

    }


    if (watchTrailer) {

        watchTrailer.addEventListener(
            "click",
            openTrailer
        );

    }


    if (closeTrailer) {

        closeTrailer.addEventListener(
            "click",
            closeTrailerModal
        );

    }


    const trailerBackdrop =
        document.getElementById(
            "trailerBackdrop"
        );


    if (trailerBackdrop) {

        trailerBackdrop.addEventListener(
            "click",
            closeTrailerModal
        );

    }


    if (trailerVideo) {

        trailerVideo.addEventListener(
            "error",
            () => {

                trailerVideo.setAttribute(
                    "data-video-error",
                    "true"
                );

                console.error(
                    "NETSCAPE trailer could not be loaded. Check that netscape-trailer.mp4 exists beside index.html."
                );

            }
        );

    }


    /* =====================================================
       DIGITAL VALUE DISCOVERY
    ====================================================== */

    const valueBurstArea =
        document.getElementById(
            "moneyGunArea"
        );

    const valueBurstTrigger =
        document.getElementById(
            "valueBurstTrigger"
        );

    const valueBurstModalTrigger =
        document.getElementById(
            "valueBurstModalTrigger"
        );

    const valueParticleField =
        document.getElementById(
            "valueParticleField"
        );

    const modalValueParticleField =
        document.getElementById(
            "modalValueParticleField"
        );

    const valueTransactionStatus =
        document.getElementById(
            "valueTransactionStatus"
        );

    const balanceDisplays =
        document.querySelectorAll(
            "[data-balance-value]"
        );


    let digitalBalance = 0;


    /* -----------------------------------------------------
       BALANCE DISPLAY
    ------------------------------------------------------ */

    function updateDigitalBalance() {

        balanceDisplays.forEach(
            display => {

                display.textContent =
                    String(
                        digitalBalance
                    ).padStart(
                        4,
                        "0"
                    );

                display.classList.remove(
                    "balance-updated"
                );

                void display.offsetWidth;

                display.classList.add(
                    "balance-updated"
                );

            }
        );

    }


    /* -----------------------------------------------------
       PARTICLE BURST
    ------------------------------------------------------ */

    function createValueParticles(
        container
    ) {

        if (!container) {
            return;
        }

        for (let i = 0; i < 12; i++) {

            const particle =
                document.createElement(
                    "span"
                );

            particle.className =
                "value-particle";

            const angle =
                (
                    Math.PI * 2 * i
                ) / 12;

            const distance =
                50 +
                Math.random() * 80;

            particle.style.setProperty(
                "--particle-x",
                `${Math.cos(angle) * distance}px`
            );

            particle.style.setProperty(
                "--particle-y",
                `${Math.sin(angle) * distance}px`
            );

            container.appendChild(
                particle
            );

            setTimeout(
                () => {

                    particle.remove();

                },
                900
            );

        }

    }


    /* -----------------------------------------------------
       RELEASE DIGITAL VALUE
    ------------------------------------------------------ */

    function releaseDigitalValue(
        sourceButton
    ) {

        if (!sourceButton) {
            return;
        }

        digitalBalance += 25;

        updateDigitalBalance();


        const parent =
            sourceButton.closest(
                ".value-burst-demo, .value-burst-panel"
            );


        if (parent) {

            parent.classList.remove(
                "value-release-active"
            );

            void parent.offsetWidth;

            parent.classList.add(
                "value-release-active"
            );

        }


        const formattedBalance =
            String(
                digitalBalance
            ).padStart(
                4,
                "0"
            );


        if (valueTransactionStatus) {

            valueTransactionStatus.textContent =
                `VALUE RELEASED // +25 // BALANCE ${formattedBalance}`;

        }


        createValueParticles(
            sourceButton ===
            valueBurstModalTrigger
                ? modalValueParticleField
                : valueParticleField
        );

    }


    /* -----------------------------------------------------
       OPEN DIGITAL VALUE LAB
    ------------------------------------------------------ */

    function openValueBurst() {

        if (!valueBurstArea) {
            return;
        }

        valueBurstArea.classList.add(
            "active"
        );

        valueBurstArea.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "value-burst-open"
        );

    }


    /* -----------------------------------------------------
       CLOSE DIGITAL VALUE LAB
    ------------------------------------------------------ */

    function closeValueBurstModal() {

        if (!valueBurstArea) {
            return;
        }

        valueBurstArea.classList.remove(
            "active"
        );

        valueBurstArea.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "value-burst-open"
        );

    }


    /* -----------------------------------------------------
       MAIN BURST TRIGGER
    ------------------------------------------------------ */

    if (valueBurstTrigger) {

        valueBurstTrigger.addEventListener(
            "click",
            () => {

                releaseDigitalValue(
                    valueBurstTrigger
                );

            }
        );

    }


    /* -----------------------------------------------------
       MODAL BURST TRIGGER
    ------------------------------------------------------ */

    if (valueBurstModalTrigger) {

        valueBurstModalTrigger.addEventListener(
            "click",
            () => {

                releaseDigitalValue(
                    valueBurstModalTrigger
                );

            }
        );

    }


    /* -----------------------------------------------------
       VALUE LAB BACKDROP
    ------------------------------------------------------ */

    if (valueBurstArea) {

        const backdrop =
            valueBurstArea.querySelector(
                ".value-burst-backdrop"
            );

        if (backdrop) {

            backdrop.addEventListener(
                "click",
                closeValueBurstModal
            );

        }

    }


    /* -----------------------------------------------------
       CLOSE VALUE LAB
    ------------------------------------------------------ */

    const closeValueBurst =
        document.getElementById(
            "closeValueBurst"
        );


    if (closeValueBurst) {

        closeValueBurst.addEventListener(
            "click",
            closeValueBurstModal
        );

    }


    /* -----------------------------------------------------
       INITIAL BALANCE
    ------------------------------------------------------ */

    updateDigitalBalance();


    /* =====================================================
       NEXO GLOBAL
    ====================================================== */

    const globalMessages = [

        "Click a concept. I'll take you inside.",

        "Web3 is easier when you experience it.",

        "There are still things hidden in the network.",

        "Try the concept cards. Don't just read them."

    ];


    let globalMessageIndex = 0;


    function rotateGlobalNexoMessage() {

        if (!globalNexoMessage) {
            return;
        }

        globalMessageIndex =
            (
                globalMessageIndex +
                1
            ) %
            globalMessages.length;

        globalNexoMessage.style.opacity =
            "0";

        setTimeout(() => {

            globalNexoMessage.textContent =
                globalMessages[
                    globalMessageIndex
                ];

            globalNexoMessage.style.opacity =
                "1";

        }, 250);

    }


    setInterval(
        rotateGlobalNexoMessage,
        5500
    );


    if (globalNexo) {

        globalNexo.addEventListener(
            "click",
            () => {

                const network =
                    document.getElementById(
                        "network"
                    );

                if (network) {

                    network.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    /* =====================================================
       HERO NEXO
    ====================================================== */

    const heroNexoCaption =
        document.querySelector(
            ".nexo-hero-caption"
        );


    if (heroNexoCaption) {

        heroNexoCaption.textContent =
            "YOUR GUIDE THROUGH WEB3";

    }


    /* =====================================================
       HERO → EXPLORE
    ====================================================== */

    const exploreNetworkButton =
        document.getElementById(
            "exploreNetworkButton"
        );


    if (exploreNetworkButton) {

        exploreNetworkButton.addEventListener(
            "click",
            () => {

                const evolution =
                    document.getElementById(
                        "evolution"
                    );

                if (evolution) {

                    evolution.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }


    /* =====================================================
       SMOOTH NAVIGATION
    ====================================================== */

    document
        .querySelectorAll(
            ".nav-link"
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const href =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !href ||
                        !href.startsWith("#")
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            href
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }
            );

        });


    /* =====================================================
       ACTIVE NAVIGATION
    ====================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    const navObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }

                        navLinks.forEach(
                            link => {

                                link.classList.toggle(
                                    "active",
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${entry.target.id}`
                                );

                            }
                        );

                    }
                );

            },
            {
                threshold: 0.35
            }
        );


    sections.forEach(
        section => {

            navObserver.observe(
                section
            );

        }
    );


    /* =====================================================
       SCROLL REVEALS
    ====================================================== */

    const revealElements =
        document.querySelectorAll(
            ".evolution-card, .concept-card, .blockchain-demo, .contract-demo, .value-burst-demo, .network-passport"
        );


    revealElements.forEach(
        element => {

            element.classList.add(
                "reveal"
            );

        }
    );


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );


    /* =====================================================
       EXISTING BLOCKCHAIN DEMO
    ====================================================== */

    const addBlock =
        document.getElementById(
            "addBlock"
        );

    const blockchainChain =
        document.getElementById(
            "blockchainChain"
        );

    const blockStatus =
        document.getElementById(
            "blockStatus"
        );


    if (
        addBlock &&
        blockchainChain
    ) {

        addBlock.addEventListener(
            "click",
            () => {

                const existingBlocks =
                    blockchainChain.querySelectorAll(
                        ".chain-block"
                    );

                const number =
                    existingBlocks.length + 1;

                const connector =
                    document.createElement(
                        "div"
                    );

                connector.className =
                    "chain-connector";

                connector.textContent =
                    "→";

                const block =
                    document.createElement(
                        "article"
                    );

                block.className =
                    "chain-block new-block";

                const hash =
                    Math.random()
                        .toString(16)
                        .substring(2, 5)
                        .toUpperCase();

                block.innerHTML = `

                    <span class="chain-block-number">
                        BLOCK ${String(number).padStart(3, "0")}
                    </span>

                    <strong>
                        TRANSACTION
                    </strong>

                    <small>
                        HASH
                    </small>

                    <code>
                        0x${hash}
                    </code>

                `;

                blockchainChain.appendChild(
                    connector
                );

                blockchainChain.appendChild(
                    block
                );

                if (blockStatus) {

                    blockStatus.textContent =
                        "BLOCK VERIFIED";

                    blockStatus.classList.add(
                        "success"
                    );

                }

                blockchainChain.scrollTo({

                    left:
                        blockchainChain.scrollWidth,

                    behavior: "smooth"

                });

            }
        );

    }


    /* =====================================================
       EXISTING CONTRACT DEMO
    ====================================================== */

    const contractToggle =
        document.getElementById(
            "contractToggle"
        );

    const contractResult =
        document.getElementById(
            "contractResult"
        );


    if (contractToggle) {

        contractToggle.addEventListener(
            "click",
            () => {

                if (!contractResult) {
                    return;
                }

                contractResult.textContent =
                    "EXECUTING...";

                setTimeout(() => {

                    contractResult.textContent =
                        "✓ ACCESS GRANTED";

                    contractResult.classList.add(
                        "success"
                    );

                    contractToggle.textContent =
                        "CONTRACT EXECUTED";

                }, 900);

            }
        );

    }


    /* =====================================================
       KEYBOARD ESC FOR OTHER MODALS
    ====================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !==
                "Escape"
            ) {
                return;
            }

            closeTrailerModal();

            closeValueBurstModal();


            const hiddenNFT =
                document.getElementById(
                    "hiddenNFT"
                );


            if (hiddenNFT) {

                hiddenNFT.classList.remove(
                    "open"
                );

                hiddenNFT.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }

        }
    );


    /* =====================================================
       INITIAL STATE
    ====================================================== */

    updatePagination();


    console.log(
        "%c NETSCAPE ",
        "background:#46e6ff;color:#050914;font-weight:900;padding:6px 10px;"
    );


    console.log(
        "Explore. Learn. Interact. Belong."
    );

});