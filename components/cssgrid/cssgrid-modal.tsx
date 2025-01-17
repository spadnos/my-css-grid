"use client";

import { CssGridImageSizeSelect } from "./cssgrid-image-size-select.tsx";
import { CssGridModalInfo } from "./cssgrid-types.ts";

// width of modal in pixels.
// Needed in order to compute whether the modal will appear off-screen,
// depending on where the user clicks.
export function computeCssGridModalWidthPx(numCols: number): number {
  if (numCols <= 2) return 106;
  if (numCols == 3) return 220;
  return 350;
}
export const cssGridModalHeightPx = 460;

export function CssGridModal({
  rightClicked,
  setRightClicked,
  setStatus,
  numCols,
  onModalClose,
}: {
  rightClicked: CssGridModalInfo;
  setRightClicked: any;
  setStatus: any;
  numCols: number;
  onModalClose: any;
}) {
  let cl =
    "z-40 max-w-min min-w-min p-1 space-y-1 bg-sky-200 fixed translate-x-" +
    rightClicked.x +
    " translate-y-" +
    rightClicked.y;

  console.log("CssGridModal: x=%d  y=%d", rightClicked.x, rightClicked.y);

  return (
    <div className={cl} onClick={onModalClose}>
      <button
        className="min-w-full p-1 rounded bg-sky-500 text-center  border-2 border-sky-800 hover:border-slate-800 "
        onClick={(e) => {
          console.log("Move Button was clicked");
          setStatus("isDragging");
        }}
      >
        Move Image
      </button>

      <CssGridImageSizeSelect
        rightClicked={rightClicked}
        setRightClicked={setRightClicked}
        setStatus={setStatus}
        numCols={numCols}
      />
    </div>
  );
}
