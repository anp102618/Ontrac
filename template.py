import logging
from pathlib import Path

logging.basicConfig(
    level=logging.INFO,
    format="[%(asctime)s] %(levelname)s: %(message)s"
)

list_of_files = [

    # ==========================================
    # Assets
    # ==========================================

    "src/assets/logo/.gitkeep",
    "src/assets/home/.gitkeep",
    "src/assets/icons/.gitkeep",

    # ==========================================
    # Components
    # ==========================================

    "src/components/Header/Header.jsx",
    "src/components/Header/Header.css",

    "src/components/Hero/Hero.jsx",
    "src/components/Hero/Hero.css",

    "src/components/Common/Button.jsx",
    "src/components/Common/Button.css",

    # ==========================================
    # Pages
    # ==========================================

    "src/pages/Home/Home.jsx",
    "src/pages/Home/Home.css",

    # ==========================================
    # Routes
    # ==========================================

    "src/routes/AppRoutes.jsx",

    # ==========================================
    # Styles
    # ==========================================

    "src/styles/global.css",
    "src/styles/variables.css",

]


def create_structure():

    for filepath in list_of_files:

        filepath = Path(filepath)

        filepath.parent.mkdir(
            parents=True,
            exist_ok=True
        )

        if not filepath.exists():
            filepath.touch()
            logging.info(f"Created : {filepath}")

        else:
            logging.info(f"Exists  : {filepath}")

    logging.info("Project structure created successfully.")


if __name__ == "__main__":
    create_structure()