Square toggle chips for single-select questions (enquiry widget "What do you do?") — use instead of radios/selects.

```jsx
<ChoiceGroup options={['Trades & services','Shop or salon','Food & drink']} value={type} onChange={setType} />
<ChoiceChip pressed>No website yet</ChoiceChip>
```

Unpressed: ink/20 border, ink/70 text, hover cobalt. Pressed: ink fill, white text.
