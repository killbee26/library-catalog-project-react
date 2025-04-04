import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

interface Book {
    id: number;
    title: string;
    author: string;
    price: string;
    description: string;
    image: string;
}

const books: Book[] = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: "$10.99",
        description: "A novel set in the 1920s about Jay Gatsby's tragic pursuit of love.",
        image: "https://th.bing.com/th/id/OIP.im1ZiU5-tF8Ob1pNoLpQ7gHaLG?rs=1&pid=ImgDetMain",
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: "$12.99",
        description: "A gripping novel about racial injustice in the Deep South.",
        image: "https://th.bing.com/th/id/OIP.R7A5RToh5o6GZiwjVHG6bAHaLT?rs=1&pid=ImgDetMain",
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        price: "$9.99",
        description: "A dystopian novel about surveillance and totalitarianism.",
        image: "https://th.bing.com/th/id/OIP.ErdfZFrY-03KaPigAIf1pAHaNS?rs=1&pid=ImgDetMain",
    },
];

const Bookstore: React.FC = () => {
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    return (
        <div className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-6">📚 Online Bookstore</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {books.map((book) => (
                    <Card
                        key={book.id}
                        className="p-4 shadow-lg cursor-pointer hover:shadow-xl transition"
                        onClick={() => setSelectedBook(book)}
                    >
                        <img
                            src={book.image}
                            alt={book.title}
                            className="rounded-lg w-full mb-4"
                        />
                        <CardContent>
                            <CardTitle className="text-lg">{book.title}</CardTitle>
                            <CardDescription className="text-gray-600">
                                by {book.author}
                            </CardDescription>
                            <p className="font-semibold mt-2">{book.price}</p>
                            <Button className="mt-4 w-full">View Details</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {selectedBook && (
                <Dialog open={true} onOpenChange={() => setSelectedBook(null)}>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>{selectedBook.title}</DialogTitle>
                            <DialogDescription>by {selectedBook.author}</DialogDescription>
                        </DialogHeader>
                        <img
                            src={selectedBook.image}
                            alt={selectedBook.title}
                            className="rounded-lg w-full my-4"
                        />
                        <p className="text-left text-gray-700">{selectedBook.description}</p>
                        <p className="text-xl font-bold mt-4">{selectedBook.price}</p>
                        <Button className="mt-4 w-full" onClick={() => setSelectedBook(null)}>
                            Close
                        </Button>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

export default Bookstore;
