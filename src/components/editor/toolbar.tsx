"use client";
import { Button } from "./button";
import React from "react";
import {
  BlockEditor,
  HREditor,
  ListEditor,
  MarkEditor,
} from "@/components/editor/plugins/custom-editor-plugins";
import {
  BLOCK_HEADING_ONE,
  BLOCK_HEADING_THREE,
  BLOCK_HEADING_TWO,
  BLOCK_PARAGRAPH,
  BULLETED_LIST,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_LINK,
  MARK_UNDERLINE,
  NUMBER_LIST,
  TEXT_ALIGN_CENTER,
  TEXT_ALIGN_LEFT,
  TEXT_ALIGN_RIGHT,
} from "@/constant/slate";
import ImageButton from "@/components/editor/image-button";
import LinkButton from "@/components/editor/link-button";
import { useSlateStatic } from "slate-react";

export const Toolbar = ({ show }: { show: boolean }) => {
  const editor = useSlateStatic();
  if (!show) return null;

  return (
    <div className={`flex`}>
      <Button
        title={`ctrl+b`}
        onclickHandler={() => {
          BlockEditor.toggleBlock(editor, BLOCK_PARAGRAPH);
        }}
        className={`flex border border-gray-300 px-1.5 py-0.5 italic`}
      >
        P
      </Button>
      <Button
        title={`ctrl+b`}
        onclickHandler={() => {
          MarkEditor.toggleMark(editor, MARK_BOLD);
        }}
        className={`flex border border-gray-300 px-1.5 py-0.5 italic`}
      >
        B
      </Button>
      <Button
        onclickHandler={() => {
          MarkEditor.toggleMark(editor, MARK_CODE);
        }}
        className={`flex border border-gray-300 px-1.5 py-0.5 italic`}
      >
        C
      </Button>
      <Button
        onclickHandler={() => {
          MarkEditor.toggleMark(editor, MARK_UNDERLINE);
        }}
        className={`flex border border-gray-300 px-1.5 py-0.5 italic`}
      >
        U
      </Button>
      <Button
        onclickHandler={() => {
          MarkEditor.toggleMark(editor, MARK_ITALIC);
        }}
        className={`flex border border-gray-300 px-1.5 py-0.5 italic`}
      >
        I
      </Button>
      <LinkButton />
      <Button
        onclickHandler={() => {
          BlockEditor.toggleBlock(editor, BLOCK_HEADING_ONE);
        }}
        className={`flex border border-gray-300 px-1.5 py-0.5 italic`}
      >
        H1
      </Button>
      <Button
        onclickHandler={() => {
          BlockEditor.toggleBlock(editor, BLOCK_HEADING_TWO);
        }}
        className={`flex border border-gray-300 px-1.5 py-0.5 italic`}
      >
        H2
      </Button>
      <Button
        onclickHandler={() => {
          BlockEditor.toggleBlock(editor, BLOCK_HEADING_THREE);
        }}
        className={`flex border border-gray-300 px-1.5 py-0.5 italic`}
      >
        H3
      </Button>
      <Button
        onclickHandler={() => {
          BlockEditor.toggleBlock(editor, TEXT_ALIGN_LEFT);
        }}
        className={`flex border border-gray-300 px-1.5 py-0.5 italic`}
      >
        Left
      </Button>
      <Button
        onclickHandler={() => {
          BlockEditor.toggleBlock(editor, TEXT_ALIGN_CENTER);
        }}
        className={`flex border border-gray-300 px-1.5 py-0.5 italic`}
      >
        Center
      </Button>
      <Button
        onclickHandler={() => {
          BlockEditor.toggleBlock(editor, TEXT_ALIGN_RIGHT);
        }}
        className={`flex border border-gray-300 px-1.5 py-0.5 italic`}
      >
        Right
      </Button>
      <Button
        onclickHandler={() => {
          ListEditor.toggleList(editor, NUMBER_LIST);
        }}
        className={`flex border border-gray-300 px-1.5 py-0.5 italic`}
      >
        Number
      </Button>
      <Button
        onclickHandler={() => {
          ListEditor.toggleList(editor, BULLETED_LIST);
        }}
        className={`flex border border-gray-300 px-1.5 py-0.5 italic`}
      >
        Bullet
      </Button>
      <ImageButton />
      <Button
        onclickHandler={() => {
          HREditor.toggleHR(editor);
        }}
        className={`flex border border-gray-300 px-1.5 py-0.5 italic`}
      >
        HR
      </Button>
    </div>
  );
};
