import React, { useState } from 'react';
import './ThoughtProcessEditor.css';

const ThoughtProcessEditor = ({ initialData = {} }) => {
    const [data, setData] = useState({
        problem_context: '',
        user_insight: '',
        product_decision: '',
        expected_impact: '',
        ...initialData
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div className="editor-container glass-panel">
            <h3 className="text-xl font-bold mb-6 text-gradient">Design Thought Process</h3>
            <div className="grid gap-6">
                <div className="editor-field">
                    <label>Problem Context</label>
                    <textarea
                        name="problem_context"
                        value={data.problem_context}
                        onChange={handleChange}
                        placeholder="Describe the problem..."
                        rows="3"
                    />
                </div>
                <div className="editor-field">
                    <label>User Insight</label>
                    <textarea
                        name="user_insight"
                        value={data.user_insight}
                        onChange={handleChange}
                        placeholder="What did we learn about the user?"
                        rows="3"
                    />
                </div>
                <div className="editor-field">
                    <label>Product Decision</label>
                    <textarea
                        name="product_decision"
                        value={data.product_decision}
                        onChange={handleChange}
                        placeholder="What did we change and why?"
                        rows="3"
                    />
                </div>
                <div className="editor-field">
                    <label>Expected Impact</label>
                    <textarea
                        name="expected_impact"
                        value={data.expected_impact}
                        onChange={handleChange}
                        placeholder="What is the expected outcome?"
                        rows="3"
                    />
                </div>
            </div>
        </div>
    );
};

export default ThoughtProcessEditor