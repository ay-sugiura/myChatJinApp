import { VFC } from "react";
import { InputArea } from "../molecules/InputArea";

type Props = {
    value: string; // インプットに表示されているテキスト
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export const NameInputArea: VFC<Props> = (props) => {
    const { value, onChange, onClick } = props;
    return (
        <InputArea
            value={value}
            onChange={onChange}
            onClick={onClick}
            placeholder="名前を入力してください"
            buttonText="入室"
        />
    );
};
