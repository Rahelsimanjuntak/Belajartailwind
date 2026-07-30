export type CommentSource = "json_api" | "setter";

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  source?: CommentSource;
  localId?: string;
}
// tambah ini
export type CreateCommentPayload = {
  name: string;
  email: string;
  body: string;
};


export type CommentList = Comment[];
