import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface ReplyFormProps {
  onSubmit: (replyContent: string) => void;
  onCancel: () => void;
}

export const ReplyForm: React.FC<ReplyFormProps> = ({ onSubmit, onCancel }) => {
  const [reply, setReply] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reply.trim()) {
      setError('Reply cannot be empty');
      return;
    }
    onSubmit(reply.trim());
    setReply('');
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <Textarea
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Write your reply..."
        aria-label="Reply content"
        rows={2}
        className="mb-2"
      />
      {error && <div className="text-red-600 text-xs mb-2">{error}</div>}
      <div className="flex gap-2">
        <Button type="submit" size="sm" variant="default">
          Submit
        </Button>
        <Button type="button" size="sm" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}; 