import * as React from "react";
import { Input } from "../ui/input";

const Post: React.FunctionComponent<{
  className: string;
  postCategory: string;
  setPostCategory: Function;
  status: string;
  setStatus: Function;
}> = ({ className, postCategory, setPostCategory, status, setStatus }) => {
  return (
    <div className={className}>
      <div className="font-[Raleway] text-2xl font-bold leading-8 mb-5 text-[#170F49]">
        Publicar
      </div>
      <div className="w-100 min-h-[237px] p-7 rounded-[20px] bg-[#FFF] mt-5">
        <Input
          className="mb-4"
          required={true}
          type="text"
          id="category"
          label="Categoría"
          name="category"
          placeholder="Textil"
          value={postCategory}
          onChange={(e) => setPostCategory(e.target.value)}
        />
        <Input
          required={true}
          type="text"
          id="status"
          label="Estatus"
          name="status"
          placeholder="Publicado"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Post;
