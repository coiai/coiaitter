function App() {
    return (
        <div>
            <Tweet
                icon="🐟"
                displayName="コイアイ"
                accountName="coiai"
                content="hello react"
            />
            <Tweet
                icon="🐡"
                displayName="ほげほげ"
                accountName="hogehoge"
                content="さかなさかなさかな"
            />
        </div>
    );
}

const target = document.querySelector('#app');
ReactDOM.render(<App />, target);