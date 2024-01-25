import reflex as rx
import webconreflex.styles.styles as styles
from webconreflex.styles.styles import Size
from webconreflex.styles.colors import Color


def navbar() -> rx.Component:
    return rx.hstack(   
        rx.box(
            rx.span("moure", color=Color.PRIMARY.value),
            rx.span("dev", color=Color.SECONDARY.value),
            style=styles.navbar_title_style
        ),
        position="sticky",
        bg=Color.CONTENT.value,
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0"
    )
