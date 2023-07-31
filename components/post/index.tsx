import * as React from "react";
import { Input } from "../ui/input";

const Post: React.FunctionComponent = () => {
  return (
    <div>
      <div className="font-[Raleway] text-2xl font-bold leading-8 mb-5 text-[#170F49]">
        Publicar
      </div>
      <div className="w-[350px] h-[237px] rounded-[20px] bg-[#FFF] mt-5">
        <div className="w-[300px] pt-7 pl-5">
          <div>
            <Input
              className="mb-4"
              required={true}
              type="text"
              id="category"
              label="Categoría"
              name="category"
              placeholder="Textil"
            />
          </div>
          <div>
            <Input
              required={true}
              type="text"
              id="status"
              label="Estatus"
              name="status"
              placeholder="Publicado"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
